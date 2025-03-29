import React, { useState } from 'react';
import { Box, Typography, Button, Paper, CircularProgress, Container } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SecurityIcon from '@mui/icons-material/Security';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import './FreeTrial.css';

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
        // TODO: 실제 딥페이크 감지 API 연동
        setTimeout(() => {
            setResult({
                isDeepfake: Math.random() > 0.5,
                confidence: (Math.random() * 100).toFixed(2)
            });
            setIsAnalyzing(false);
        }, 2000);
    };

    return (
        <div className="free-trial-container">
            <Container maxWidth="lg">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                    p: 4,
                    maxWidth: '800px',
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
                            color: '#ffffff',
                            backgroundColor: 'rgba(138, 43, 226, 0.2)',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            '&:hover': {
                                backgroundColor: 'rgba(138, 43, 226, 0.3)',
                                transform: 'translateX(-5px)',
                                boxShadow: '0 4px 15px rgba(138, 43, 226, 0.3)'
                            },
                            transition: 'all 0.3s ease',
                            border: '1px solid rgba(138, 43, 226, 0.3)',
                            backdropFilter: 'blur(5px)'
                        }}
                    >
                        Back to Main
                    </Button>
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <SecurityIcon sx={{
                            fontSize: 80,
                            color: '#8A2BE2',
                            mb: 2,
                            filter: 'drop-shadow(0 0 15px rgba(138, 43, 226, 0.7))'
                        }} />
                        <Typography variant="h2" component="h1" gutterBottom sx={{
                            fontWeight: 'bold',
                            background: 'linear-gradient(45deg, #8A2BE2 30%, #6A0DAD 90%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            mb: 2,
                            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                            letterSpacing: '1px'
                        }}>
                            Deepfake Detection
                        </Typography>
                        <Typography variant="h5" sx={{
                            mb: 1,
                            color: '#ffffff',
                            fontWeight: '500',
                            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                        }}>
                            AI-Powered Deepfake Detection System
                        </Typography>
                        <Typography variant="h6" sx={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontWeight: '400',
                            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                        }}>
                            Upload an image to check if it's a deepfake or original.
                        </Typography>
                    </Box>

                    {previewUrl ? (
                        <Box sx={{
                            width: '100%',
                            maxWidth: '500px',
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                borderRadius: '12px',
                                boxShadow: '0 0 20px rgba(138, 43, 226, 0.3)',
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
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                                }}
                            />
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                width: '100%',
                                maxWidth: '500px',
                                height: '300px',
                                border: '2px solid',
                                borderColor: '#8A2BE2',
                                borderRadius: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 2,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                background: 'rgba(138, 43, 226, 0.05)',
                                '&:hover': {
                                    borderColor: '#6A0DAD',
                                    background: 'rgba(138, 43, 226, 0.1)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 0 20px rgba(138, 43, 226, 0.3)'
                                }
                            }}
                            component="label"
                        >
                            <input
                                type="file"
                                hidden
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                            <CloudUploadIcon sx={{
                                fontSize: 80,
                                color: '#8A2BE2',
                                filter: 'drop-shadow(0 0 15px rgba(138, 43, 226, 0.7))'
                            }} />
                            <Typography variant="h5" sx={{
                                color: '#8A2BE2',
                                fontWeight: '600',
                                textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                            }}>
                                Click or drag to upload an image
                            </Typography>
                            <Typography variant="subtitle1" sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontWeight: '400'
                            }}>
                                Supports JPG, PNG, GIF files
                            </Typography>
                        </Box>
                    )}

                    {selectedImage && !isAnalyzing && (
                        <Button
                            variant="contained"
                            onClick={handleAnalyze}
                            sx={{
                                mt: 2,
                                background: 'linear-gradient(45deg, #8A2BE2 30%, #6A0DAD 90%)',
                                color: 'white',
                                padding: '15px 40px',
                                fontSize: '1.2rem',
                                fontWeight: '600',
                                letterSpacing: '1px',
                                boxShadow: '0 4px 15px rgba(138, 43, 226, 0.4)',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #6A0DAD 30%, #8A2BE2 90%)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 6px 20px rgba(138, 43, 226, 0.6)'
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
                            gap: 2,
                            p: 3,
                            borderRadius: '12px',
                            background: 'rgba(138, 43, 226, 0.2)',
                            border: '1px solid rgba(138, 43, 226, 0.4)',
                            boxShadow: '0 4px 15px rgba(138, 43, 226, 0.3)'
                        }}>
                            <CircularProgress size={28} sx={{ color: '#8A2BE2' }} />
                            <Typography sx={{
                                fontSize: '1.1rem',
                                fontWeight: '500',
                                color: '#ffffff'
                            }}>
                                Analyzing image...
                            </Typography>
                        </Box>
                    )}

                    {result && (
                        <Box
                            sx={{
                                mt: 2,
                                p: 4,
                                borderRadius: '16px',
                                background: result.isDeepfake
                                    ? 'linear-gradient(45deg, #d32f2f 30%, #b71c1c 90%)'
                                    : 'linear-gradient(45deg, #2e7d32 30%, #1b5e20 90%)',
                                color: 'white',
                                width: '100%',
                                maxWidth: '500px',
                                textAlign: 'center',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                                border: '1px solid rgba(255, 255, 255, 0.2)'
                            }}
                        >
                            <Typography variant="h4" sx={{
                                mb: 2,
                                fontWeight: 'bold',
                                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                            }}>
                                {result.isDeepfake ? 'Detected as Deepfake' : 'Detected as Original'}
                            </Typography>
                            <Typography variant="h5" sx={{
                                fontWeight: '500',
                                textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                            }}>
                                Confidence: {result.confidence}%
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Container>
        </div>
    );
};

export default FreeTrial;