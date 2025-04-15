import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './FreeTrial.css';
import axios from "axios";
import {useAuth} from "../../components/Api/Auth/AuthProvider";
import { styled } from '@mui/material/styles';
import Stepper from "./components/Stepper";
import Banner from "../../components/Banners/Banner";
import Navigation from "../../components/Navigation/Navigation";
import {UploadProvider} from "./components/UploadProvider";

// const Section = styled(Box)(({ theme }) => ({
//     padding: '2rem 0',
//     backgroundColor: '#ffffff',
//     width: '100%',
//     maxWidth: '1000px',
//     margin: '0 auto',
//     [theme.breakpoints.down('sm')]: {
//         padding: '1rem 0',
//     },
// }));
//
// const FileUploadBox = styled(Box)(({ theme }) => ({
//     width: '320px',
//     height: '200px',
//     border: '2px solid #2196F3',
//     borderRadius: '12px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: 1,
//     cursor: 'pointer',
//     background: 'rgba(33, 150, 243, 0.05)',
//     transition: 'all 0.3s ease',
//     '&:hover': {
//         borderColor: '#1976D2',
//         background: 'rgba(33, 150, 243, 0.1)',
//         transform: 'translateY(-2px)',
//         boxShadow: '0 0 20px rgba(33, 150, 243, 0.3)'
//     }
// }));

const FreeTrial = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState(null);
    const {accessToken, isLoading} = useAuth();

    useEffect(() => {
        if (!isLoading && !accessToken) {
            navigate("/login");
        }
    }, [isLoading, accessToken]);

    if (isLoading) return <div>로딩 중...</div>;

    // const handleImageUpload = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         setSelectedImage(file);
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setPreviewUrl(reader.result);
    //         };
    //         reader.readAsDataURL(file);
    //         setResult(null);
    //     }
    // };

    // const handleAnalyze = async () => {
    //     if (!selectedImage) return;
    //
    //     setIsAnalyzing(true);
    //
    //     const formData = new FormData();
    //     formData.append('files', selectedImage);
    //
    //     const response = axios.post("http://localhost:8080/api/v1/files/upload", formData, {
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //             "Authorization": `Bearer ${accessToken}`
    //         }, withCredentials: true
    //     })
    //         .then(response => console.log(response))
    //     setTimeout(
    //         () => {
    //             setResult({
    //                 isDeepfake: Math.random() > 0.5,
    //                 confidence: (Math.random() * 100).toFixed(2)
    //             });
    //             setIsAnalyzing(false);
    //         }, 2000);
    // };

    return (
        <UploadProvider>
        <Banner/>
    <Navigation/>
            <Stepper/>
        </UploadProvider>
    );
};
export default FreeTrial;
