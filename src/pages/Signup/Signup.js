import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Stack } from '@mui/material';
import './Signup.css';
import { AppProvider } from '@toolpad/core/AppProvider';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getDesignTokens, inputsCustomizations } from '../Login/customTheme';
import signupAPI from "../../components/Api/SignupAPI";

const SignUp = () => {
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
    const { signup } = signupAPI();

    const [formState, setFormState] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!formState.email || !formState.password || !formState.confirmPassword) {
            setError('모든 필드를 입력해주세요.');
            return;
        }

        if (formState.password !== formState.confirmPassword) {
            setError('비밀번호가 일치하지 않습니다.');
            return;
        }

        await signup(formState);
    };

    const handleInputChange = (field) => (event) => {
        setFormState((prev) => ({
            ...prev,
            [field]: event.target.value,
        }));
        setError('');
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
                        minHeight: '100vh',
                        padding: '2rem',
                    }}
                >
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        className="Z84S96"
                        sx={{
                            width: '100%',
                            maxWidth: '400px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h4" component="h1" gutterBottom>
                            Create Account
                        </Typography>
                        <Typography variant="body1" color="text.secondary" gutterBottom>
                            Enter your details to create your account
                        </Typography>

                        <Stack spacing={3} sx={{ width: '100%', mt: 4, mb: 2 }}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                value={formState.email}
                                onChange={handleInputChange('email')}
                                placeholder="Enter your email"
                                required
                                sx={{ mb: 1 }}
                                InputLabelProps={{
                                    sx: { mb: 1 }
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                name="password"
                                type="password"
                                value={formState.password}
                                onChange={handleInputChange('password')}
                                placeholder="Enter your password"
                                required
                                sx={{ mb: 1 }}
                                InputLabelProps={{
                                    sx: { mb: 1 }
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Confirm Password"
                                name="confirmPassword"
                                type="password"
                                value={formState.confirmPassword}
                                onChange={handleInputChange('confirmPassword')}
                                placeholder="Confirm your password"
                                required
                                sx={{ mb: 1 }}
                                InputLabelProps={{
                                    sx: { mb: 1 }
                                }}
                            />

                            {error && (
                                <Typography color="error" variant="body2">
                                    {error}
                                </Typography>
                            )}

                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                disabled={!formState.email || !formState.password || !formState.confirmPassword}
                            >
                                Sign Up
                            </Button>

                            <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                                Already have an account?{' '}
                                <Button
                                    variant="text"
                                    color="primary"
                                    onClick={() => window.location.href = '/login'}
                                >
                                    Sign In
                                </Button>
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            </AppProvider>
        </div>
    );
};

export default SignUp;