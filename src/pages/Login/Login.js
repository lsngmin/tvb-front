import React, { useState } from "react";
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, Typography, Box } from '@mui/material';
import './Login.css';
import { getDesignTokens, inputsCustomizations } from './customTheme';
import axios from "axios";
import { useAuth } from "../../components/Api/Auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const providers = [
    { id: 'github', name: 'GitHub' },
    { id: 'google', name: 'Google' },
    { id: 'credentials', name: 'Email and Password' },
];

const Login = () => {
    const { setAccessToken } = useAuth();
    const navigate = useNavigate();
    const mode = 'dark';
    const brandingDesignTokens = getDesignTokens(mode);

    const theme = createTheme({
        ...brandingDesignTokens,
        palette: {
            ...brandingDesignTokens.palette,
            mode: mode,
        },
        components: {
            ...inputsCustomizations,
            MuiButton: {
                ...inputsCustomizations.MuiButton,
                styleOverrides: {
                    ...inputsCustomizations.MuiButton.styleOverrides,
                    root: ({ theme }) => ({
                        ...inputsCustomizations.MuiButton.styleOverrides.root({ theme }),
                        '&.Mui-disabled': {
                            opacity: 0.5,
                            color: 'inherit',
                            backgroundColor: 'inherit',
                            backgroundImage: 'inherit',
                        },
                    }),
                },
            },
        },
    });

    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (field) => (event) => {
        setFormState((prev) => ({
            ...prev,
            [field]: event.target.value,
        }));
    };

    const signIn = async (provider) => {
        if (provider.id === 'credentials') {
            if (!formState.email || !formState.password) {
                return { error: '이메일과 비밀번호를 모두 입력해주세요.' };
            }

            try {
                const prod_url = "https://api.tvsbox.click";
                // const loca_url = "http://localhost:8080"; // 로컬 테스트용 URL 주석 처리
                const path = prod_url + "/api/v1/auth/login";

                const requestData = {
                    user: {
                        userId: formState.email,
                    },
                    password: {
                        password: formState.password,
                    },
                };

                const response = await axios.post(path, requestData, { withCredentials: true });
                const { accessToken } = response.data;

                setAccessToken(accessToken);
                navigate("/");
            } catch (error) {
                console.error('로그인 에러:', error); // 에러 로그 추가
                return { error: '서버 연결에 실패했습니다.' };
            }
        }

        // 소셜 로그인 처리
        if (provider.id === 'github') {
            window.location.href = '/oauth2/authorization/github';
        } else if (provider.id === 'google') {
            window.location.href = '/oauth2/authorization/google';
        }

        // credentials, github, google 외의 provider 경우 에러 반환
        if (provider.id !== 'credentials' && provider.id !== 'github' && provider.id !== 'google') {
            return { error: '지원하지 않는 로그인 방식입니다.' };
        }
        // signIn 함수는 provider 처리 후 항상 값을 반환해야 하므로, credentials 성공 시 별도 반환 로직 불필요
    };


    return (
        <div className="G12H62">
            <AppProvider theme={theme}>
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '100vh', // 화면 전체 높이를 차지하도록 설정
                        width: '100%',
                        padding: 2, // 전체적인 패딩 추가
                        boxSizing: 'border-box', // 패딩이 너비/높이에 포함되도록 설정
                    }}
                >
                    {/* 로그인 폼과 버튼들을 감싸는 컨테이너 */}
                    <Box
                        sx={{
                            width: '100%', // 너비를 100%로 설정
                            maxWidth: '450px', // 최대 너비를 제한하여 너무 커지지 않도록 함
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center', // 내부 요소들을 중앙 정렬
                            gap: 0, // SignInPage와 하단 버튼 사이의 간격을 줄임 (기존 gap: 2)
                        }}
                    >
                        <SignInPage
                            signIn={signIn}
                            providers={providers}
                            sx={{
                                width: '100%', // SignInPage 너비 고정
                                '& form > .MuiStack-root': {
                                    marginTop: '2rem',
                                    rowGap: '0.5rem',
                                    width: '100%', // 내부 스택 너비 고정
                                    // maxWidth 제거 (상위 Box에서 제어)
                                },
                                '& form': {
                                    width: '100%', // 폼 너비 고정
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                },
                                '& .MuiTextField-root': {
                                    width: '100%', // 텍스트 필드 너비 고정
                                },
                                '& .MuiButton-root[type="submit"]': { // Sign In 버튼만 너비 고정
                                    width: '100%',
                                },
                                '& .MuiBox-root': { // 소셜 로그인 버튼 등을 포함한 내부 Box
                                    width: '100%',
                                    marginTop: '1rem',
                                },
                            }}
                            slotProps={{
                                form: {
                                    noValidate: true,
                                    onChange: (event) => {
                                        const field = event.target.name;
                                        handleInputChange(field)(event);
                                    },
                                    className: 'Z84S96',
                                },
                                submitButton: {
                                    disabled: !formState.email || !formState.password,
                                    children: 'Sign In',
                                },
                                divider: {
                                    children: null,
                                },
                                socialButtons: { // 소셜 로그인 버튼은 숨김
                                    children: null,
                                },
                                footer: { // 기본 푸터는 사용 안 함
                                    children: null,
                                },
                            }}
                        />
                        {/* Sign Up 링크 */}
                        <Box sx={{ textAlign: 'center', width: '100%' }}> {/* 너비 100% 설정 */}
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Don't have an account?{' '}
                                <Button
                                    variant="text"
                                    color="primary"
                                    onClick={() => navigate('/signup')} // navigate 사용
                                    sx={{
                                        textTransform: 'none',
                                        p: 0,
                                        minWidth: 'auto',
                                        color: 'primary.main',
                                        '&:hover': {
                                            textDecoration: 'underline',
                                        },
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </Typography>
                        </Box>
                        {/* Back to Main 버튼 */}
                        <Box sx={{ textAlign: 'center', width: '100%' }}> {/* 너비 100% 설정 */}
                            <Button
                                variant="text"
                                color="primary"
                                onClick={() => navigate('/')} // navigate 사용
                                sx={{
                                    textTransform: 'none',
                                    color: 'text.secondary',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                ← Back to Main
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </AppProvider>
        </div>
    );
};

export default Login;