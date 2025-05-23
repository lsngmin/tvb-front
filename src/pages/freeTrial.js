import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "providers/authProvider";
import {UploadProvider} from "features/freeTrial/provider/uploadProvider";

import AnalyzeProcess from "features/freeTrial/analyzeProcess";

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
            {/*<Banner/>*/}
            <Navigation/>

            <AnalyzeProcess/>

            {/*<Stepper/>*/}
        </UploadProvider>
    );
};
export default FreeTrial;
