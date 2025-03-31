import React, { useState } from 'react';
import {
    Box, Typography, Button, CircularProgress, Container
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SecurityIcon from '@mui/icons-material/Security';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import './FreeTrial.css';
import { styled } from '@mui/material/styles';

const Section = styled(Box)(({ theme }) => ({
    padding: '2rem 0',
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
        padding: '1rem 0',
    },
}));

const FileUploadBox = styled(Box)(({ theme }) => ({
    width: '320px',
    height: '200px',
    border: '2px solid #2196F3',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
    cursor: 'pointer',
    background: 'rgba(33, 150, 243, 0.05)',
    transition: 'all 0.3s ease',
    '&:hover': {
        borderColor: '#1976D2',
        background: 'rgba(33, 150, 243, 0.1)',
        transform: 'translateY(-2px)',
        boxShadow: '0 0 20px rgba(33, 150, 243, 0.3)'
    }
}));

const FreeTrial = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState(null);

    const handleBackToMain = () => {
        navigate('/');
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
            setResult(null);
        }
    };

    const handleAnalyze = async () => {
        if (!selectedImage) return;

        setIsAnalyzing(true);
        setTimeout(() => {
            setResult({
                isDeepfake: Math.random() > 0.5,
                confidence: (Math.random() * 100).toFixed(2)
            });
            setIsAnalyzing(false);
        }, 2000);
    };

    return (
        <Box sx={{
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#ffffff',
            margin: '0 auto'
        }}>
            <Section>
                <Container maxWidth="lg">
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 3,
                        p: 2,
                        width: '700px',
                        mx: 'auto',
                        position: 'relative'
                    }}>
                        <Button
                            onClick={handleBackToMain}
                            startIcon={<ArrowBackIcon />}
                            sx={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                color: '#2196F3',
                                backgroundColor: 'rgba(33, 150, 243, 0.1)',
                                padding: '6px 12px',
                                borderRadius: '6px',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                '&:hover': {
                                    backgroundColor: 'rgba(33, 150, 243, 0.2)',
                                    transform: 'translateX(-5px)',
                                    boxShadow: '0 4px 15px rgba(33, 150, 243, 0.2)'
                                },
                                transition: 'all 0.3s ease',
                                border: '1px solid rgba(33, 150, 243, 0.2)'
                            }}
                        >
                            Back
                        </Button>

                        <Box sx={{ textAlign: 'center', mb: 3 }}>
                            <SecurityIcon sx={{
                                fontSize: 40,
                                color: '#2196F3',
                                mb: 1,
                                filter: 'drop-shadow(0 0 10px rgba(33, 150, 243, 0.5))'
                            }} />
                            <Typography variant="h4" sx={{
                                fontWeight: 'bold',
                                background: 'linear-gradient(45deg, #2196F3 30%, #1976D2 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                mb: 1,
                                letterSpacing: '0.5px'
                            }}>
                                Deepfake Detection
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#333', fontWeight: 500 }}>
                                AI-Powered Deepfake Detection System
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666' }}>
                                Upload an image to check if it's a deepfake or original.
                            </Typography>
                        </Box>

                        {previewUrl ? (
                            <Box sx={{
                                width: '100%',
                                maxWidth: '400px',
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    borderRadius: '12px',
                                    boxShadow: '0 0 15px rgba(138, 43, 226, 0.25)',
                                    pointerEvents: 'none'
                                }
                            }}>
                                <img
                                    src={previewUrl}
                                    alt="Preview"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '12px',
                                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)'
                                    }}
                                />
                            </Box>
                        ) : (
                            <FileUploadBox component="label">
                                <input
                                    type="file"
                                    hidden
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                                <CloudUploadIcon sx={{
                                    fontSize: 60,
                                    color: '#2196F3',
                                }} />
                                <Typography variant="subtitle1" sx={{ color: '#2196F3', fontWeight: 600 }}>
                                    Click or drag to upload an image
                                </Typography>
                                <Typography variant="caption" sx={{ color: '#666' }}>
                                    Supports JPG, PNG, GIF files
                                </Typography>
                            </FileUploadBox>
                        )}

                        {selectedImage && !isAnalyzing && (
                            <Button
                                variant="contained"
                                onClick={handleAnalyze}
                                sx={{
                                    mt: 1,
                                    background: 'linear-gradient(45deg, #2196F3 30%, #1976D2 90%)',
                                    color: 'white',
                                    padding: '10px 28px',
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #1976D2 30%, #2196F3 90%)',
                                        transform: 'translateY(-1px)',
                                        boxShadow: '0 5px 15px rgba(33, 150, 243, 0.4)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Start Analysis
                            </Button>
                        )}

                        {isAnalyzing && (
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                p: 2,
                                borderRadius: '10px',
                                background: 'rgba(138, 43, 226, 0.15)',
                                border: '1px solid rgba(138, 43, 226, 0.3)'
                            }}>
                                <CircularProgress size={24} sx={{ color: '#8A2BE2' }} />
                                <Typography sx={{
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    color: '#4d0b8c'
                                }}>
                                    Analyzing image...
                                </Typography>
                            </Box>
                        )}

                        {result && (
                            <Box sx={{
                                mt: 2,
                                p: 3,
                                borderRadius: '12px',
                                background: result.isDeepfake
                                    ? 'linear-gradient(45deg, #d32f2f 30%, #b71c1c 90%)'
                                    : 'linear-gradient(45deg, #2e7d32 30%, #1b5e20 90%)',
                                color: 'white',
                                maxWidth: '400px',
                                textAlign: 'center',
                                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)'
                            }}>
                                <Typography variant="h6" sx={{
                                    mb: 1,
                                    fontWeight: 'bold'
                                }}>
                                    {result.isDeepfake ? 'Detected as Deepfake' : 'Detected as Original'}
                                </Typography>
                                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                    Confidence: {result.confidence}%
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Container>
            </Section>
        </Box>
    );
};

export default FreeTrial;
