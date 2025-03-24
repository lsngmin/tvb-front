import React, { useState } from "react";
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './Login.css';
import { getDesignTokens, inputsCustomizations } from 'customTheme';

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