import React, { useState } from "react";
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, Typography, Box } from '@mui/material';
import './Login.css';
import { getDesignTokens, inputsCustomizations } from './customTheme';

const providers = [
    { id: 'github', name: 'GitHub' },
    { id: 'google', name: 'Google' },
    { id: 'credentials', name: 'Email and Password' },
];

const Login = () => {
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

    const signIn = async (provider) => {
        if (provider.id === 'credentials') {
            if (!formState.email || !formState.password) {
                return { error: '이메일과 비밀번호를 모두 입력해주세요.' };
            }
        }
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Sign in with ${provider.id}`, formState);
                resolve({ error: 'This is a mock error message.' });
            }, 500);
        });
        return promise;
    };

    const handleInputChange = (field) => (event) => {
        setFormState((prev) => ({
            ...prev,
            [field]: event.target.value,
        }));
    };

    return (
        <div className="G12H62">
            <AppProvider theme={theme}>
                <CssBaseline />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    width: '100%'
                }}>
                    <Box sx={{ width: '100%', maxWidth: '450px' }}>
                        <SignInPage
                            signIn={signIn}
                            providers={providers}
                            sx={{
                                '& form > .MuiStack-root': {
                                    marginTop: '2rem',
                                    rowGap: '0.5rem',
                                    width: '100%',
                                    maxWidth: '450px'
                                },
                                '& form': {
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                },
                                '& .MuiTextField-root': {
                                    width: '100%'
                                },
                                '& .MuiButton-root': {
                                    width: '100%'
                                },
                                '& .MuiBox-root': {
                                    width: '100%',
                                    marginTop: '1rem'
                                }
                            }}
                            slotProps={{
                                form: {
                                    noValidate: true,
                                    onChange: (event) => {
                                        const field = event.target.name;
                                        handleInputChange(field)(event);
                                    },
                                    className: 'Z84S96'
                                },
                                submitButton: {
                                    disabled: !formState.email || !formState.password,
                                    children: 'Sign In'
                                },
                                divider: {
                                    children: null
                                },
                                socialButtons: {
                                    children: null
                                },
                                footer: {
                                    children: null
                                }
                            }}
                        />
                        <Box sx={{ mt: -16, textAlign: 'center' }}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Don't have an account?{' '}
                                <Button
                                    variant="text"
                                    color="primary"
                                    onClick={() => window.location.href = '/signup'}
                                    sx={{
                                        textTransform: 'none',
                                        p: 0,
                                        minWidth: 'auto',
                                        color: 'primary.main',
                                        '&:hover': {
                                            textDecoration: 'underline'
                                        }
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 1, textAlign: 'center' }}>
                            <Button
                                variant="text"
                                color="primary"
                                onClick={() => window.location.href = '/'}
                                sx={{
                                    textTransform: 'none',
                                    color: 'text.secondary',
                                    '&:hover': {
                                        textDecoration: 'underline'
                                    }
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