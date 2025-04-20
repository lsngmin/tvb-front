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
import Navigation from '../features/navigation/navigation';
import { useNavigate } from 'react-router-dom';

const Section = styled(Box)(({ theme }) => ({
    padding: '3rem 0',
    position: 'relative',
    overflow: 'hidden',
    maxWidth: '1000px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
        padding: '1.5rem 0',
    },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
    flex: 1, // ✅ 너비 문제 해결 핵심
    padding: theme.spacing(3),
    borderRadius: '12px',
    maxWidth: '900px',
    width: '100%',
    margin: '0 auto',
    background: 'transparent',
    border: '1px solid #e0e0e0',
    transition: 'all 0.4s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: '2.2rem',
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#1f1f1f',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
        marginBottom: '2rem',
    },
}));

const IconWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    position: 'relative',
    '& svg': {
        marginRight: '1rem',
        fontSize: '1.8rem',
        color: '#1f1f1f',
        opacity: 0.9,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            opacity: 1,
            transform: 'scale(1.1)',
        },
    },
});

const Support = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* 고정 네비게이션 */}
            <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1200 }}>
                <Navigation />
            </Box>

            {/* 본문 콘텐츠 */}
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    overflow: 'hidden',
                    bgcolor: '#ffffff',
                    paddingTop: '90px', // 네비게이션 높이만큼
                }}
            >
                <Section>
                    <SectionTitle>Frequently Asked Questions</SectionTitle>
                    <Grid container spacing={10}>
                        <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                            <ContentWrapper>
                                <IconWrapper>
                                    <HelpIcon />
                                    <Typography variant="h3" component="h2" sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#1f1f1f' }}>
                                        What is Deepfake?
                                    </Typography>
                                </IconWrapper>
                                <Typography variant="h6" sx={{ fontSize: '1rem', lineHeight: 1.6, color: '#333333' }}>
                                    Deepfake is a type of artificial intelligence that can create or manipulate images and videos to make them appear authentic. Our service helps detect these manipulated contents to protect your digital assets.
                                </Typography>
                            </ContentWrapper>
                        </Grid>

                        <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                            <ContentWrapper>
                                <IconWrapper>
                                    <SecurityIcon />
                                    <Typography variant="h3" component="h2" sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#1f1f1f' }}>
                                        How accurate is the detection?
                                    </Typography>
                                </IconWrapper>
                                <Typography variant="h6" sx={{ fontSize: '1rem', lineHeight: 1.6, color: '#333333' }}>
                                    Our AI-powered detection system achieves over 99% accuracy in identifying deepfake content. We continuously update our models to stay ahead of new deepfake techniques.
                                </Typography>
                            </ContentWrapper>
                        </Grid>

                        <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                            <ContentWrapper>
                                <IconWrapper>
                                    <SpeedIcon />
                                    <Typography variant="h3" component="h2" sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#1f1f1f' }}>
                                        How long does analysis take?
                                    </Typography>
                                </IconWrapper>
                                <Typography variant="h6" sx={{ fontSize: '1rem', lineHeight: 1.6, color: '#333333' }}>
                                    Most analyses are completed within seconds. For longer videos, the process may take a few minutes depending on the file size and complexity.
                                </Typography>
                            </ContentWrapper>
                        </Grid>

                        <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                            <ContentWrapper>
                                <IconWrapper>
                                    <PaymentIcon />
                                    <Typography variant="h3" component="h2" sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#1f1f1f' }}>
                                        What are the pricing options?
                                    </Typography>
                                </IconWrapper>
                                <Typography variant="h6" sx={{ fontSize: '1rem', lineHeight: 1.6, color: '#333333' }}>
                                    We offer flexible pricing plans starting from $29/month. Each plan includes a certain number of analyses per month. Contact us for custom enterprise solutions.
                                </Typography>
                            </ContentWrapper>
                        </Grid>

                        <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                            <ContentWrapper>
                                <IconWrapper>
                                    <SupportAgentIcon />
                                    <Typography variant="h3" component="h2" sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#1f1f1f' }}>
                                        How can I get support?
                                    </Typography>
                                </IconWrapper>
                                <Typography variant="h6" sx={{ fontSize: '1rem', lineHeight: 1.6, color: '#333333' }}>
                                    Our support team is available 24/7 through email, live chat, and phone. We typically respond to inquiries within 24 hours.
                                </Typography>
                            </ContentWrapper>
                        </Grid>
                    </Grid>
                </Section>
            </Box>
        </>
    );
};

export default Support;
