import React, {useEffect} from "react";
import FileAnalyzeAPI from "./FileAnalyzeAPI"
import FileUploader from "./FirstStepFileUploader";
import {ClimbingBoxLoader, GridLoader} from "react-spinners";

export default function SecondStep({onUploadComplete, onLoading, analyzeResult, onShowStep2Animation}) {
    useEffect(() => {
        console.log("두 번째 스텝 진입! AI 분석 시작~");
        handleFileChange();
    }, []);
    const {fileAnalyze} = FileAnalyzeAPI();


    const handleFileChange = async () => {
        onLoading(true);
        const response = await fileAnalyze();
        if (response?.status === 200) {
            onLoading(false);
            onUploadComplete();
            onShowStep2Animation(false)
            analyzeResult(response.data)
            console.log(response.status);
        } else {
            onLoading(false);
        }
    };

    return (
        <div className={`max-w-sm sm:max-w-7xl mx-auto p-6 mt-10 rounded-2xl shadow-lg border border-gray-200`}>
        <div className="flex justify-center py-10">
            <GridLoader
                loading
                margin={7}
                size={22}
                speedMultiplier={1.1}
            />
        </div>
        </div>
    );
}
