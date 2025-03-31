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
    [theme.breakpoints.down('sm')]: {
        padding: '2rem 0',
    },
}));

const GridContainer = styled(Grid)(({ theme }) => ({
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
        padding: '0 1rem',
    },
}));

const GridItem = styled(Grid)(({ theme }) => ({
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
    },
}));

const ContentWrapper = styled(Box)(({ theme, variant }) => ({
    padding: theme.spacing(3),
    borderRadius: '12px',
    background: variant === 'transparent' ? 'transparent' : '#f9f9f9',
    border: '1px solid #e0e0e0',
    transition: 'all 0.4s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
        transform: 'translateY(-8px)',
        borderColor: '#cccccc',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
    },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#1f1f1f',
    position: 'relative',
    fontFamily: 'Titillium Web',
    letterSpacing: '-0.03em',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.8rem',
        marginBottom: '2rem',
    },
}));

const IconWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
    position: 'relative',
    '& svg': {
        marginRight: '1.5rem',
        fontSize: '2.5rem',
        color: '#1E90FF',
        opacity: 0.9,
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        '&:hover': {
            opacity: 1,
            transform: 'scale(1.1)',
        },
    },
});

const Introducing = () => {
    return (
        <Box className="Introducing">
            <Section>
                <SectionTitle variant="h1">The Risks of Deepfake</SectionTitle>
                <GridContainer container spacing={6} justifyContent="center">
                    <GridItem xs={12}>
                        <ContentWrapper>
                            <IconWrapper>
                                <WarningIcon />
                                <Typography variant="h3" component="h2" sx={{
                                    fontWeight: 700,
                                    fontSize: '2rem',
                                    color: '#1f1f1f',
                                    letterSpacing: '0.1em',
                                    '& span': {
                                        marginRight: '0.3em'
                                    }
                                }}>
                                    <span>A</span>
                                    <span>New</span>
                                    <span>Threat</span>
                                    <span>in</span>
                                    <span>the</span>
                                    <span>Digital</span>
                                    <span>Age</span>
                                </Typography>
                            </IconWrapper>
                            <Typography variant="h6" sx={{
                                fontSize: '1.5rem',
                                lineHeight: 1.8,
                                color: '#333333'
                            }}>
                                As deepfake technology advances, fake videos and audio become increasingly realistic and difficult to detect.
                                This leads to serious issues such as fake news, fraud, and identity theft.
                            </Typography>
                        </ContentWrapper>
                    </GridItem>
                </GridContainer>
            </Section>

            <Section>
                <SectionTitle variant="h1">Our Solution</SectionTitle>
                <GridContainer container spacing={6} justifyContent="center">
                    <GridItem xs={12}>
                        <ContentWrapper>
                            <IconWrapper>
                                <SecurityIcon />
                                <Typography variant="h3" component="h2" sx={{
                                    fontWeight: 700,
                                    fontSize: '2rem',
                                    color: '#1f1f1f',
                                    letterSpacing: '0.1em',
                                    '& span': {
                                        marginRight: '0.3em'
                                    }
                                }}>
                                    <span>AI</span>
                                    <span>-</span>
                                    <span>Powered</span>
                                    <span>Deepfake</span>
                                    <span>Detection</span>
                                </Typography>
                            </IconWrapper>
                            <Typography variant="h6" sx={{
                                fontSize: '1.5rem',
                                lineHeight: 1.8,
                                color: '#333333'
                            }}>
                                Utilizing the latest AI models, we accurately analyze the authenticity of images and videos.
                                Our TensorFlow-based deep learning technology ensures high reliability.
                            </Typography>
                        </ContentWrapper>
                    </GridItem>
                    <GridItem xs={12}>
                        <ContentWrapper>
                            <IconWrapper>
                                <SpeedIcon />
                                <Typography variant="h3" component="h2" sx={{
                                    fontWeight: 700,
                                    fontSize: '2rem',
                                    color: '#1f1f1f',
                                    letterSpacing: '0.1em',
                                    '& span': {
                                        marginRight: '0.3em'
                                    }
                                }}>
                                    <span>Real</span>
                                    <span>-</span>
                                    <span>Time</span>
                                    <span>Analysis</span>
                                </Typography>
                            </IconWrapper>
                            <Typography variant="h6" sx={{
                                fontSize: '1.5rem',
                                lineHeight: 1.8,
                                color: '#333333'
                            }}>
                                Get deepfake detection results in just seconds.
                                Our system provides instant and accurate analysis, allowing quick responses to potential threats.
                            </Typography>
                        </ContentWrapper>
                    </GridItem>
                </GridContainer>
            </Section>

            <Section>
                <SectionTitle variant="h1">How it Works</SectionTitle>
                <GridContainer container spacing={6} justifyContent="center">
                    <GridItem xs={12}>
                        <ContentWrapper>
                            <IconWrapper>
                                <UploadIcon />
                                <Typography variant="h3" component="h2" sx={{
                                    fontWeight: 700,
                                    fontSize: '2rem',
                                    color: '#1f1f1f',
                                    letterSpacing: '0.05em',
                                    '& span': {
                                        marginRight: '0.2em'
                                    }
                                }}>
                                    <span>Simple</span>
                                    <span>3</span>
                                    <span>-</span>
                                    <span>Step</span>
                                    <span>Process</span>
                                </Typography>
                            </IconWrapper>
                            <Box component="ol" sx={{
                                mt: 2,
                                listStyle: 'none',
                                paddingLeft: 0,
                                '& li': {
                                    marginBottom: '1.5rem',
                                    lineHeight: 1.8,
                                    fontSize: '1.2rem',
                                    color: '#333333'
                                }
                            }}>
                                <Typography component="li">
                                        1. Upload the image for analysis.
                                </Typography>
                                <Typography component="li">
                                    2. Our AI automatically detects if the content is deepfake.
                                </Typography>
                                <Typography component="li">
                                    3. Review the analysis results and take appropriate actions.
                                </Typography>
                            </Box>
                        </ContentWrapper>
                    </GridItem>
                </GridContainer>
            </Section>
        </Box>
    );
}

export default Introducing;