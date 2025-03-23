import React from 'react';
import "./Introducing.css";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import WarningIcon from '@mui/icons-material/Warning';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UploadIcon from '@mui/icons-material/Upload';
import VerifiedIcon from '@mui/icons-material/Verified';
import Typography from '@mui/material/Typography';

const Section = styled(Box)(({ theme }) => ({
    padding: '4rem 0',
    position: 'relative',
    overflow: 'hidden',
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
    },
}));

const ContentWrapper = styled(Box)(({ theme, variant }) => ({
    padding: theme.spacing(6),
    borderRadius: '20px',
    background: variant === 'transparent' ? 'transparent' : 'rgba(255, 255, 255, 0.03)',
    backdropFilter: variant === 'transparent' ? 'none' : 'blur(10px)',
    border: variant === 'transparent' ? 'none' : '1px solid rgba(255, 255, 255, 0.05)',
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
        display: variant === 'transparent' ? 'none' : 'block',
    },
    '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: variant === 'transparent' ? 'none' : '0 20px 40px rgba(0, 0, 0, 0.3)',
        border: variant === 'transparent' ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
        background: variant === 'transparent' ? 'transparent' : 'rgba(255, 255, 255, 0.05)',
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

const Introducing = () => {
    return (
        <Box className="Introducing">
            <Section>
                <SectionTitle variant="h1">The Risks of Deepfake</SectionTitle>
                <Grid container spacing={4}>
                    <Grid xs={12}>
                        <ContentWrapper variant="transparent">
                            <IconWrapper>
                                <WarningIcon />
                                <Typography variant="h3" component="h2" sx={{ fontWeight: 700, fontSize: '2.5rem', color: '#fff' }}>
                                    A New Threat in the Digital Age
                                </Typography>
                            </IconWrapper>
                            <Typography variant="h6" sx={{ fontSize: '1.5rem', lineHeight: 1.8, mb: 3, color: '#fff' }}>
                                As deepfake technology advances, fake videos and audio become increasingly realistic and difficult to detect.
                                This leads to serious issues such as fake news, fraud, and identity theft.
                            </Typography>
                        </ContentWrapper>
                    </Grid>
                </Grid>
            </Section>

            <Section>
                <SectionTitle variant="h1">Our Solution</SectionTitle>
                <Grid container spacing={4}>
                    <Grid xs={12} md={6}>
                        <ContentWrapper>
                            <IconWrapper>
                                <SecurityIcon />
                                <Typography variant="h3" component="h2" sx={{ fontWeight: 700, fontSize: '2.5rem', color: '#fff' }}>
                                    AI-Powered Deepfake Detection
                                </Typography>
                            </IconWrapper>
                            <Typography variant="h6" sx={{ fontSize: '1.5rem', lineHeight: 1.8, color: '#fff' }}>
                                Utilizing the latest AI models, we accurately analyze the authenticity of images and videos.
                                Our TensorFlow-based deep learning technology ensures high reliability.
                            </Typography>
                        </ContentWrapper>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <ContentWrapper>
                            <IconWrapper>
                                <SpeedIcon />
                                <Typography variant="h3" component="h2" sx={{ fontWeight: 700, fontSize: '2.5rem', color: '#fff' }}>
                                    Real-Time Analysis
                                </Typography>
                            </IconWrapper>
                            <Typography variant="h6" sx={{ fontSize: '1.5rem', lineHeight: 1.8, color: '#fff' }}>
                                Get deepfake detection results in just seconds.
                                Our system provides instant and accurate analysis, allowing quick responses to potential threats.
                            </Typography>
                        </ContentWrapper>
                    </Grid>
                </Grid>
            </Section>

            <Section>
                <SectionTitle variant="h1">How It Works</SectionTitle>
                <Grid container spacing={4}>
                    <Grid xs={12}>
                        <ContentWrapper variant="transparent">
                            <IconWrapper>
                                <UploadIcon />
                                <Typography variant="h3" component="h2" sx={{ fontWeight: 700, fontSize: '2.5rem', color: '#fff' }}>
                                    Simple 3-Step Process
                                </Typography>
                            </IconWrapper>
                            <Box component="ol" sx={{ mt: 2 }}>
                                <Typography component="li" variant="h6" sx={{ fontSize: '1.5rem', lineHeight: 1.8, mb: 3, color: '#fff' }}>
                                    Upload the image for analysis.
                                </Typography>
                                <Typography component="li" variant="h6" sx={{ fontSize: '1.5rem', lineHeight: 1.8, mb: 3, color: '#fff' }}>
                                    Our AI automatically detects if the content is deepfake.
                                </Typography>
                                <Typography component="li" variant="h6" sx={{ fontSize: '1.5rem', lineHeight: 1.8, color: '#fff' }}>
                                    Review the analysis results and take appropriate actions.
                                </Typography>
                            </Box>
                        </ContentWrapper>
                    </Grid>
                </Grid>
            </Section>
        </Box>
    );
}

export default Introducing;