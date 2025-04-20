import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "providers/authProvider";
import {UploadProvider} from "features/freeTrial/provider/uploadProvider";


import Stepper from "../features/freeTrial/stepper";
import Banner from "../features/banner/banner";
import Navigation from "../features/navigation/navigation";

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

    return (
        <UploadProvider>
        <Banner/>
    <Navigation/>
            <Stepper/>
        </UploadProvider>
    );
};
export default FreeTrial;
