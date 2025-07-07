import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Navigation from '../features/navigation/navigation';
import { useNavigate } from 'react-router-dom';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';


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
    flex: 1,
    padding: theme.spacing(3),
    borderRadius: '12px',
    maxWidth: '1000px',
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
    cursor: 'pointer',
    '&:hover': {
        borderColor: '#1976d2',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
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

const AccordionHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: theme.spacing(2, 0),
    cursor: 'pointer',
}));

const HeaderContent = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    flex: 1,
});

const IconWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginRight: '1rem',
    position: 'relative',
    '& svg': {
        fontSize: '1.8rem',
        color: '#1f1f1f',
        opacity: 0.9,
        transition: 'all 0.3s ease-in-out',
    },
});

const AccordionContent = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2, 4),
    borderTop: '1px solid #e0e0e0',
    marginTop: theme.spacing(2),
}));

const Support = () => {
    const navigate = useNavigate();
    const [expandedItems, setExpandedItems] = useState({});

    const handleToggle = (index) => {
        setExpandedItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const faqData = [
        {
            icon: <HelpIcon />,
            title: "What is Deepfake?",
            content: "Deepfake refers to artificial intelligence (AI) deep learning technology used to synthesize a specific person's face or voice onto other videos, images, or audio, making them appear or sound as if they are real. These manipulations can be incredibly sophisticated, making them very difficult to distinguish from genuine media."
        },
        {
            icon: <PrecisionManufacturingIcon />,
            title: "How accurate is the detection?",
            content: "Our AI-powered detection system achieves over 99% accuracy in identifying deepfake content. We continuously update our models to stay ahead of new deepfake techniques."
        },
        {
            icon: <SpeedIcon />,
            title: "How long does analysis take?",
            content: "Most analyses are completed within seconds. For longer videos, the process may take a few minutes depending on the file size and complexity."
        },
        {
            icon: <SecurityIcon />,
            title: "Are uploaded files handled securely?",
            content: "Yes, all uploaded files are processed securely with encryption and are used solely for deepfake detection purposes. Once the analysis is complete, files are automatically deleted from our servers after a certain period. We comply with personal information protection laws and are committed to maintaining the confidentiality of your personal information and uploaded files."
        },
        {
            icon: <ReportProblemIcon />,
            title: "Can a non-deepfake be falsely detected as a deepfake?",
            content: "Yes, although rare, it can happen. Various factors such as lighting, video quality, or specific stylistic expressions can sometimes lead to genuine media being falsely detected. If you suspect a false positive, try re-analyzing a different, similar media file or consider seeking expert assistance. We are continuously improving our system to reduce false positive rates."
        }
    ];

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
                    <Grid container spacing={3}>
                        {faqData.map((faq, index) => (
                            <Grid item xs={12} key={index}>
                                <ContentWrapper onClick={() => handleToggle(index)}>
                                    <AccordionHeader>
                                        <HeaderContent>
                                            <IconWrapper>
                                                {faq.icon}
                                            </IconWrapper>
                                            <Typography
                                                variant="h3"
                                                component="h2"
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: '1.5rem',
                                                    color: '#1f1f1f',
                                                    flex: 1
                                                }}
                                            >
                                                {faq.title}
                                            </Typography>
                                        </HeaderContent>
                                        <IconButton
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleToggle(index);
                                            }}
                                            sx={{
                                                color: '#1f1f1f',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            }}
                                        >
                                            {expandedItems[index] ? <RemoveIcon /> : <AddIcon />}
                                        </IconButton>
                                    </AccordionHeader>
                                    <Collapse in={expandedItems[index]}>
                                        <AccordionContent>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontSize: '1rem',
                                                    lineHeight: 1.6,
                                                    color: '#333333',
                                                }}
                                            >
                                                {faq.content}
                                            </Typography>
                                        </AccordionContent>
                                    </Collapse>
                                </ContentWrapper>
                            </Grid>
                        ))}
                    </Grid>
                </Section>
            </Box>
        </>
    );
};

export default Support;
