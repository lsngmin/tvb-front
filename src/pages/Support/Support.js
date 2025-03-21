import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import PaymentIcon from '@mui/icons-material/Payment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Navigation from '../../components/Navigation/Navigation';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

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
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
    },
    '&:nth-of-type(odd)': {
        background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%)',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
        },
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
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.02), transparent)',
        transform: 'translateX(-100%)',
        transition: 'transform 0.6s ease-in-out',
    },
    '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'rgba(255, 255, 255, 0.05)',
        '&::before': {
            transform: 'translateX(100%)',
        },
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
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '-2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60px',
        height: '60px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: -1,
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
        marginBottom: '2rem',
    },
}));

const IconWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        left: '-1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '4px',
        height: '40px',
        background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)',
        borderRadius: '2px',
    },
    '& svg': {
        marginRight: '1.5rem',
        fontSize: '2.5rem',
        color: '#fff',
        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
        opacity: 0.9,
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60px',
            height: '60px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: -1,
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
        },
        '&:hover': {
            opacity: 1,
            transform: 'scale(1.1)',
            '&::after': {
                opacity: 1,
            },
        },
    },
});

const ContactButton = styled(Button)(({ theme }) => ({
    position: 'fixed',
    top: '40px',
    right: '150px',
    backgroundColor: '#4d0b8c',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    boxShadow: '0 4px 20px rgba(77, 11, 140, 0.3)',
    transition: 'all 0.3s ease-in-out',
    zIndex: 1000,
    '&:hover': {
        backgroundColor: '#3700b3',
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 25px rgba(77, 11, 140, 0.4)',
    },
    [theme.breakpoints.down('sm')]: {
        top: '35px',
        right: '120px',
        padding: '8px 16px',
    },
}));

const Support = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <Box sx={{ width: '100%', maxWidth: '1600px', margin: '0 auto', overflow: 'hidden', bgcolor: '#101214' }}>
            <Navigation />
            <ContactButton
                variant="contained"
                startIcon={<ContactSupportIcon />}
                onClick={handleContactClick}
            >
                Contact Us
            </ContactButton>
            <Section>
                <SectionTitle>Frequently Asked Questions</SectionTitle>
                <Grid container spacing={4}>
                    <Grid xs={12} md={6}>
                        <ContentWrapper>
                            <IconWrapper>
                                <HelpIcon />
                                <Typography variant="h3" component="h2" sx={{ fontWeight: 700, fontSize: '2rem', color: '#fff' }}>
                                    What is Deepfake?
                                </Typography>
                            </IconWrapper>
                            <Typography variant="h6" sx={{ fontSize: '1.3rem', lineHeight: 1.8, color: '#fff' }}>
                                Deepfake is a type of artificial intelligence that can create or manipulate images and videos to make them appear authentic. Our service helps detect these manipulated contents to protect your digital assets.
                            </Typography>
                        </ContentWrapper>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <ContentWrapper>
                            <IconWrapper>
                                <SecurityIcon />
                                <Typography variant="h3" component="h2" sx={{ fontWeight: 700, fontSize: '2rem', color: '#fff' }}>
                                    How accurate is the detection?
                                </Typography>
                            </IconWrapper>
                            <Typography variant="h6" sx={{ fontSize: '1.3rem', lineHeight: 1.8, color: '#fff' }}>
                                Our AI-powered detection system achieves over 99% accuracy in identifying deepfake content. We continuously update our models to stay ahead of new deepfake techniques.
                            </Typography>
                        </ContentWrapper>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <ContentWrapper>
                            <IconWrapper>
                                <SpeedIcon />
                                <Typography variant="h3" component="h2" sx={{ fontWeight: 700, fontSize: '2rem', color: '#fff' }}>
                                    How long does analysis take?
                                </Typography>
                            </IconWrapper>
                            <Typography variant="h6" sx={{ fontSize: '1.3rem', lineHeight: 1.8, color: '#fff' }}>
                                Most analyses are completed within seconds. For longer videos, the process may take a few minutes depending on the file size and complexity.
                            </Typography>
                        </ContentWrapper>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <ContentWrapper>
                            <IconWrapper>
                                <PaymentIcon />
                                <Typography variant="h3" component="h2" sx={{ fontWeight: 700, fontSize: '2rem', color: '#fff' }}>
                                    What are the pricing options?
                                </Typography>
                            </IconWrapper>
                            <Typography variant="h6" sx={{ fontSize: '1.3rem', lineHeight: 1.8, color: '#fff' }}>
                                We offer flexible pricing plans starting from $29/month. Each plan includes a certain number of analyses per month. Contact us for custom enterprise solutions.
                            </Typography>
                        </ContentWrapper>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <ContentWrapper>
                            <IconWrapper>
                                <SupportAgentIcon />
                                <Typography variant="h3" component="h2" sx={{ fontWeight: 700, fontSize: '2rem', color: '#fff' }}>
                                    How can I get support?
                                </Typography>
                            </IconWrapper>
                            <Typography variant="h6" sx={{ fontSize: '1.3rem', lineHeight: 1.8, color: '#fff' }}>
                                Our support team is available 24/7 through email, live chat, and phone. We typically respond to inquiries within 24 hours.
                            </Typography>
                        </ContentWrapper>
                    </Grid>
                </Grid>
            </Section>
        </Box>
    );
};

export default Support;