import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Navigation from '../features/navigation/navigation';

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

const PricingCard = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: '15px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease-in-out',
    flex: 1,
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
    },
}));

const FeatureList = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: '1.5rem 0',
    flexGrow: 1,
});

const FeatureItem = styled('li')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    color: '#555555',
    fontSize: '1rem',
    '& svg': {
        marginRight: '0.8rem',
        color: '#4d0b8c',
        fontSize: '1.2rem',
    },
}));

const PricingContainer = styled(Box)({
    width: '100%',
    position: 'relative',
});

const PricingTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    color: '#333333',
    fontWeight: 700,
    marginBottom: '1rem',
    fontFamily: '"Titillium Web", sans-serif',
}));

const PricingPrice = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    color: '#333',
    fontWeight: 700,
    marginBottom: '1.5rem',
    fontFamily: '"Titillium Web", sans-serif',
}));

const Pricing = () => {
    return (
        <PricingContainer className="pricing-page">
            <Navigation />
            <Section>
                <Typography variant="h2" sx={{
                    textAlign: 'center',
                    color: '#333333',
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    fontWeight: 700,
                    marginBottom: '1rem',
                    fontFamily: '"Titillium Web", sans-serif',
                }}>
                    Pricing Plans
                </Typography>
                <Typography variant="h5" sx={{
                    textAlign: 'center',
                    color: '#666666',
                    marginBottom: '4rem',
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    fontFamily: '"Titillium Web", sans-serif',
                }}>
                    Choose the plan that fits your deepfake detection needs
                </Typography>

                <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
                        <PricingCard>
                            <Typography variant="h4" sx={{ color: '#333', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.3rem', fontFamily: '"Titillium Web", sans-serif' }}>
                                Basic
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.95rem', fontFamily: '"Titillium Web", sans-serif' }}>
                                For individuals and small projects
                            </Typography>
                            <Typography variant="h3" sx={{ color: '#333', fontWeight: 700, marginBottom: '1.5rem', fontSize: '2rem', fontFamily: '"Titillium Web", sans-serif' }}>
                                $29
                                <Typography component="span" sx={{ fontSize: '1rem', color: '#666', marginLeft: '0.5rem' }}>
                                    /month
                                </Typography>
                            </Typography>
                            <FeatureList>
                                <FeatureItem><CheckCircleIcon /> Basic Deepfake Detection</FeatureItem>
                                <FeatureItem><CheckCircleIcon /> 100 Analyses per Month</FeatureItem>
                                <FeatureItem><CheckCircleIcon /> Email Support</FeatureItem>
                                <FeatureItem><CheckCircleIcon /> Basic Analytics</FeatureItem>
                            </FeatureList>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: '#4d0b8c', color: '#4d0b8c', marginTop: 'auto',
                                    '&:hover': { borderColor: '#3700b3', backgroundColor: 'rgba(77, 11, 140, 0.04)' },
                                    padding: '10px 20px', fontSize: '1rem', borderRadius: '8px', textTransform: 'none', fontFamily: '"Titillium Web", sans-serif', width: '100%'
                                }}
                            >
                                Select Plan
                            </Button>
                        </PricingCard>
                    </Grid>

                    <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
                        <PricingCard>
                            <Typography variant="h4" sx={{ color: '#333', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.3rem', fontFamily: '"Titillium Web", sans-serif' }}>
                                Professional
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.95rem', fontFamily: '"Titillium Web", sans-serif' }}>
                                For businesses and organizations
                            </Typography>
                            <Typography variant="h3" sx={{ color: '#333', fontWeight: 700, marginBottom: '1.5rem', fontSize: '2rem', fontFamily: '"Titillium Web", sans-serif' }}>
                                $99
                                <Typography component="span" sx={{ fontSize: '1rem', color: '#666', marginLeft: '0.5rem' }}>
                                    /month
                                </Typography>
                            </Typography>
                            <FeatureList>
                                <FeatureItem><CheckCircleIcon /> Advanced Deepfake Detection</FeatureItem>
                                <FeatureItem><CheckCircleIcon /> 500 Analyses per Month</FeatureItem>
                                <FeatureItem><CheckCircleIcon /> Priority Email Support</FeatureItem>
                                <FeatureItem><CheckCircleIcon /> Advanced Analytics</FeatureItem>
                                <FeatureItem><CheckCircleIcon /> API Access</FeatureItem>
                            </FeatureList>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: '#4d0b8c', color: '#4d0b8c', marginTop: 'auto',
                                    '&:hover': { borderColor: '#3700b3', backgroundColor: 'rgba(77, 11, 140, 0.04)' },
                                    padding: '10px 20px', fontSize: '1rem', borderRadius: '8px', textTransform: 'none', fontFamily: '"Titillium Web", sans-serif', width: '100%'
                                }}
                            >
                                Select Plan
                            </Button>
                        </PricingCard>
                    </Grid>

                    <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
                        <PricingCard>
                            <Typography variant="h4" sx={{ color: '#333', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.3rem', fontFamily: '"Titillium Web", sans-serif' }}>
                                Enterprise
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.95rem', fontFamily: '"Titillium Web", sans-serif' }}>
                                For large organizations
                            </Typography>
                            <Typography variant="h3" sx={{ color: '#333', fontWeight: 700, marginBottom: '1.5rem', fontSize: '2rem', fontFamily: '"Titillium Web", sans-serif' }}>
                                Custom
                            </Typography>
                            <FeatureList>
                                <FeatureItem><CheckCircleIcon /> Enterprise Deepfake Detection</FeatureItem>
                                <FeatureItem><CheckCircleIcon /> Unlimited Analyses</FeatureItem>
                                <FeatureItem><CheckCircleIcon /> 24/7 Priority Support</FeatureItem>
                                <FeatureItem><CheckCircleIcon /> Custom Analytics</FeatureItem>
                                <FeatureItem><CheckCircleIcon /> Dedicated API Access</FeatureItem>
                                <FeatureItem><CheckCircleIcon /> Custom Integration</FeatureItem>
                            </FeatureList>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: '#4d0b8c', color: '#4d0b8c', marginTop: 'auto',
                                    '&:hover': { borderColor: '#3700b3', backgroundColor: 'rgba(77, 11, 140, 0.04)' },
                                    padding: '10px 20px', fontSize: '1rem', borderRadius: '8px', textTransform: 'none', fontFamily: '"Titillium Web", sans-serif', width: '100%'
                                }}
                            >
                                Contact Sales
                            </Button>
                        </PricingCard>
                    </Grid>
                </Grid>
            </Section>
        </PricingContainer>
    );
};

export default Pricing;