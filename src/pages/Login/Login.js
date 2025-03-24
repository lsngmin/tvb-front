import React, { useState } from "react";
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './Login.css';
import { getDesignTokens, inputsCustomizations } from './customTheme';
import { testApi, login } from "../../components/Api/Api";
import axios from "axios";
import {useAuth} from "../../components/Api/Auth/AuthProvider";
import {useNavigate} from "react-router-dom";

const providers = [
  { id: 'github', name: 'GitHub' },
  { id: 'google', name: 'Google' },
  { id: 'credentials', name: 'Email and Password' },
];

const Login = () => {
  const {setAccessToken} = useAuth();
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

  const signIn = async (provider) => {
    if (provider.id === 'credentials') {
      if (!formState.email || !formState.password) {
        return { error: '이메일과 비밀번호를 모두 입력해주세요.' };
      }

      try {


        const prod_url = "http://tvbox.us-east-2.elasticbeanstalk.com"
        const loca_url = "http://localhost:8080"
        const path = loca_url + "/api/v1/auth/";


        const requestData = {
          user: {
            userId: formState.email
          },
          password: {
            password: formState.password
          }
        };
        const response = await axios.post(path, requestData, { withCredentials: true });
        const {accessToken} = response.data;

        setAccessToken(accessToken);
        navigate("/");
      } catch (error) {
        //console.error('로그인 에러:', error);
        return { error: '서버 연결에 실패했습니다.' };
      }
    }

    // 소셜 로그인 처리
    if (provider.id === 'github') {
      window.location.href = '/oauth2/authorization/github';
    } else if (provider.id === 'google') {
      window.location.href = '/oauth2/authorization/google';
    }

    return { error: '지원하지 않는 로그인 방식입니다.' };
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
        <SignInPage
          signIn={signIn}
          providers={providers}
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
              disabled: !formState.email || !formState.password
            }
          }}
          sx={{
            '& form > .MuiStack-root': {
              marginTop: '2rem',
              rowGap: '0.5rem',
              width: '100%',
              maxWidth: '400px'
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
            }
          }}
        />
      </AppProvider>
    </div>
  );
};

export default Login;