import React, { useState } from 'react';
import { Typography, TextField, Button, Alert, Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Navigation from '../../components/Navigation/Navigation';
import './Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: ''
    });
    const [errors, setErrors] = useState({});
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [showVerificationInput, setShowVerificationInput] = useState(false);
    const [signupMethod, setSignupMethod] = useState(null); // 'email' or 'social'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailVerification = async () => {
        if (!validateEmail(formData.email)) {
            setErrors(prev => ({
                ...prev,
                email: 'Please enter a valid email address.'
            }));
            return;
        }

        try {
            // TODO: Email duplicate check API call
            const isDuplicate = false; // Replace with API response

            if (isDuplicate) {
                setErrors(prev => ({
                    ...prev,
                    email: 'This email is already in use.'
                }));
                return;
            }

            // TODO: Email verification code sending API call
            setShowVerificationInput(true);
        } catch (error) {
            setErrors(prev => ({
                ...prev,
                email: 'An error occurred during email verification.'
            }));
        }
    };

    const handleVerifyCode = async () => {
        try {
            // TODO: Verification code check API call
            const isValid = true; // Replace with API response

            if (isValid) {
                setIsEmailVerified(true);
                setShowVerificationInput(false);
            } else {
                setErrors(prev => ({
                    ...prev,
                    verificationCode: 'Invalid verification code.'
                }));
            }
        } catch (error) {
            setErrors(prev => ({
                ...prev,
                verificationCode: 'An error occurred while verifying the code.'
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.email) newErrors.email = 'Please enter your email.';
        if (!formData.password) newErrors.password = 'Please enter your password.';
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }
        if (!formData.name) newErrors.name = 'Please enter your name.';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        if (!isEmailVerified) {
            setErrors(prev => ({
                ...prev,
                email: 'Please complete email verification.'
            }));
            return;
        }

        try {
            // TODO: Signup API call (password encryption)
            console.log('Signup data:', formData);
            // Redirect to login page on success
        } catch (error) {
            setErrors(prev => ({
                ...prev,
                submit: 'An error occurred during signup.'
            }));
        }
    };

    const handleSocialSignUp = async (platform) => {
        try {
            // TODO: 소셜 로그인 API 호출
            console.log(`${platform} 로그인 시도`);
            // 성공 시 회원가입 완료 처리
        } catch (error) {
            setErrors(prev => ({
                ...prev,
                submit: `${platform} 로그인 중 오류가 발생했습니다.`
            }));
        }
    };

    const textFieldStyle = {
        '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.1)' },
            '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
            '&.Mui-focused fieldset': { borderColor: '#4d0b8c' },
            '& input': { color: '#fff' }
        },
        '& .MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.7)',
            '&.Mui-focused': { color: '#4d0b8c' }
        }
    };

    return (
        <div>
            <Navigation />
            <section className="signup-section">
                <div className="content-wrapper">
                    <Typography variant="h4" component="h1" className="title">
                        Sign Up
                    </Typography>

                    {errors.submit && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {errors.submit}
                        </Alert>
                    )}

                    {!signupMethod ? (
                        <div className="signup-methods">
                            <Button
                                variant="contained"
                                onClick={() => setSignupMethod('email')}
                                className="method-button"
                            >
                                Sign up with Email
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => setSignupMethod('social')}
                                className="method-button"
                            >
                                Sign up with Social Account
                            </Button>
                        </div>
                    ) : signupMethod === 'email' ? (
                        <form onSubmit={handleSubmit}>
                            <div className="email-verification">
                                <TextField
                                    fullWidth
                                    name="email"
                                    label="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    disabled={isEmailVerified}
                                    sx={textFieldStyle}
                                />
                                <Button
                                    variant="contained"
                                    onClick={handleEmailVerification}
                                    disabled={isEmailVerified}
                                    className="button verify-button"
                                >
                                    Verify
                                </Button>
                            </div>

                            {showVerificationInput && !isEmailVerified && (
                                <div className="verification-input">
                                    <TextField
                                        fullWidth
                                        label="Verification Code"
                                        value={verificationCode}
                                        onChange={(e) => setVerificationCode(e.target.value)}
                                        error={!!errors.verificationCode}
                                        helperText={errors.verificationCode}
                                        sx={textFieldStyle}
                                    />
                                    <Button
                                        variant="contained"
                                        onClick={handleVerifyCode}
                                        className="button verify-button"
                                    >
                                        Confirm
                                    </Button>
                                </div>
                            )}

                            <div className="form-group">
                                <TextField
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    error={!!errors.password}
                                    helperText={errors.password}
                                    sx={textFieldStyle}
                                />
                            </div>

                            <div className="form-group">
                                <TextField
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    error={!!errors.confirmPassword}
                                    helperText={errors.confirmPassword}
                                    sx={textFieldStyle}
                                />
                            </div>

                            <div className="form-group">
                                <TextField
                                    fullWidth
                                    name="name"
                                    label="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    error={!!errors.name}
                                    helperText={errors.name}
                                    sx={textFieldStyle}
                                />
                            </div>

                            <Button
                                type="submit"
                                variant="contained"
                                disabled={!isEmailVerified}
                                className="button"
                            >
                                <span>Sign Up</span>
                            </Button>
                        </form>
                    ) : (
                        <div className="social-signup">
                            <Button
                                variant="outlined"
                                startIcon={
                                    <img src="/google.png" alt="Google" style={{ width: 20, height: 20 }} />
                                }
                                onClick={() => handleSocialSignUp('google')}
                                className="social-button"
                                sx={{ textTransform: 'none' }}
                            >
                                Continue with Google
                            </Button>

                            <Button
                                variant="outlined"
                                startIcon={
                                    <img src="/kakao.png" alt="Kakao" style={{ width: 20, height: 20 }} />
                                }
                                onClick={() => handleSocialSignUp('kakao')}
                                className="social-button"
                            >
                                Continue with Kakao
                            </Button>

                            <Button
                                variant="outlined"
                                startIcon={
                                    <img src="/naver_icon.png" alt="Naver" style={{ width: 20, height: 20 }} />
                                }
                                onClick={() => handleSocialSignUp('naver')}
                                className="social-button"
                            >
                                Continue with Naver
                            </Button>
                        </div>
                    )}

                    <Button
                        variant="text"
                        onClick={() => setSignupMethod(null)}
                        className="back-button"
                    >
                        Back
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Signup;