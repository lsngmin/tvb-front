import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Navigation from '../../components/Navigation/Navigation';
import CheckIcon from '@mui/icons-material/Check';

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '2rem',
    '&:hover': {
        border: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'rgba(255, 255, 255, 0.05)',
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        gap: '1rem',
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

const PricingCard = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
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

const PricingTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#fff',
    marginBottom: theme.spacing(2),
    textAlign: 'center',
}));

const PricingPrice = styled(Typography)(({ theme }) => ({
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#4d0b8c',
    marginBottom: theme.spacing(3),
    textAlign: 'center',
}));

const FeatureList = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(3),
}));

const FeatureItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.8)',
}));

const StyledCheckIcon = styled(CheckIcon)(({ theme }) => ({
    color: '#4d0b8c',
    marginRight: theme.spacing(1),
}));

const SelectButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#4d0b8c',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '25px',
    width: '100%',
    boxShadow: '0 4px 20px rgba(77, 11, 140, 0.3)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        backgroundColor: '#3700b3',
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 25px rgba(77, 11, 140, 0.4)',
    },
}));

const Pricing = () => {
    return (
        <Box sx={{ width: '100%', maxWidth: '1600px', margin: '0 auto', overflow: 'hidden', bgcolor: '#101214' }}>
            <Navigation />
            <Section>
                <SectionTitle>Pricing Plans</SectionTitle>
                <ContentWrapper>
                    <PricingCard>
                        <PricingTitle>Basic</PricingTitle>
                        <PricingPrice>$29/month</PricingPrice>
                        <FeatureList>
                            <FeatureItem>
                                <StyledCheckIcon />
                                <Typography>Up to 100 detections per month</Typography>
                            </FeatureItem>
                            <FeatureItem>
                                <StyledCheckIcon />
                                <Typography>Basic API access</Typography>
                            </FeatureItem>
                            <FeatureItem>
                                <StyledCheckIcon />
                                <Typography>Email support</Typography>
                            </FeatureItem>
                            <FeatureItem>
                                <StyledCheckIcon />
                                <Typography>Standard processing time</Typography>
                            </FeatureItem>
                        </FeatureList>
                        <SelectButton variant="contained">
                            Select Plan
                        </SelectButton>
                    </PricingCard>

                    <PricingCard>
                        <PricingTitle>Professional</PricingTitle>
                        <PricingPrice>$99/month</PricingPrice>
                        <FeatureList>
                            <FeatureItem>
                                <StyledCheckIcon />
                                <Typography>Up to 1000 detections per month</Typography>
                            </FeatureItem>
                            <FeatureItem>
                                <StyledCheckIcon />
                                <Typography>Advanced API access</Typography>
                            </FeatureItem>
                            <FeatureItem>
                                <StyledCheckIcon />
                                <Typography>Priority email support</Typography>
                            </FeatureItem>
                            <FeatureItem>
                                <StyledCheckIcon />
                                <Typography>Faster processing time</Typography>
                            </FeatureItem>
                            <FeatureItem>
                                <StyledCheckIcon />
                                <Typography>Custom integration support</Typography>
                            </FeatureItem>
                        </FeatureList>
                        <SelectButton variant="contained">
                            Select Plan
                        </SelectButton>
                    </PricingCard>

                    <PricingCard>
                        <PricingTitle>Enterprise</PricingTitle>
                        <PricingPrice>Custom</PricingPrice>
                        <FeatureList>
                            <FeatureItem>
                                <StyledCheckIcon />
                                <Typography>Unlimited detections</Typography>
                            </FeatureItem>
                            <FeatureItem>
                                <StyledCheckIcon />
                                <Typography>Full API access</Typography>
                            </FeatureItem>
                            <FeatureItem>
                                <StyledCheckIcon />
                                <Typography>24/7 dedicated support</Typography>
                            </FeatureItem>
                            <FeatureItem>
                                <StyledCheckIcon />
                                <Typography>Fastest processing time</Typography>
                            </FeatureItem>
                            <FeatureItem>
                                <StyledCheckIcon />
                                <Typography>Custom solutions</Typography>
                            </FeatureItem>
                            <FeatureItem>
                                <StyledCheckIcon />
                                <Typography>Dedicated account manager</Typography>
                            </FeatureItem>
                        </FeatureList>
                        <SelectButton variant="contained">
                            Contact Sales
                        </SelectButton>
                    </PricingCard>
                </ContentWrapper>
            </Section>
        </Box>
    );
};

export default Pricing;