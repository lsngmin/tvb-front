import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Navigation from '../../components/Navigation/Navigation';
import SendIcon from '@mui/icons-material/Send';
import FormControl from '@mui/material/FormControl';

const Section = styled(Box)(({ theme }) => ({
    padding: '4rem 0',
    position: 'relative',
    overflow: 'hidden',
    marginTop: '80px',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '2rem 0',
        marginTop: '60px',
    },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6),
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.4s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'relative',
    overflow: 'hidden',
    maxWidth: '800px',
    margin: '0 auto',
    '&:hover': {
        border: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'rgba(255, 255, 255, 0.05)',
    },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: '3rem',
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100px',
        height: '3px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
        borderRadius: '2px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
        marginBottom: '2rem',
    },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        color: '#fff',
        '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.1)',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.2)',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#4d0b8c',
        },
    },
    '& .MuiInputLabel-root': {
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-focused': {
            color: '#4d0b8c',
        },
    },
    marginBottom: theme.spacing(3),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#4d0b8c',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '25px',
    boxShadow: '0 4px 20px rgba(77, 11, 140, 0.3)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        backgroundColor: '#3700b3',
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 25px rgba(77, 11, 140, 0.4)',
    },
    marginTop: theme.spacing(3),
}));

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 필수 입력 검사
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Please fill in all required fields');
            return;
        }

        // 이메일 형식 검사
        if (!formData.email.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }

        // 여기에 폼 제출 로직 추가
        console.log('Form submitted:', formData);
        // 제출 후 폼 초기화
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <Box sx={{ width: '100%', maxWidth: '1600px', margin: '0 auto', overflow: 'hidden', bgcolor: '#101214' }}>
            <Navigation />
            <Section>
                <SectionTitle>Contact Us</SectionTitle>
                <ContentWrapper>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth>
                            <StyledTextField
                                fullWidth
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <StyledTextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <StyledTextField
                                fullWidth
                                label="Subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <StyledTextField
                                fullWidth
                                label="Message"
                                name="message"
                                multiline
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </FormControl>
                        <SubmitButton
                            type="submit"
                            variant="contained"
                            endIcon={<SendIcon />}
                            fullWidth
                        >
                            Send Message
                        </SubmitButton>
                    </form>
                </ContentWrapper>
            </Section>
        </Box>
    );
};

export default Contact; 