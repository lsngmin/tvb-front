import React, { useState } from "react";
import FirstStep from "./FirstStep";
import UploadProvider from "../../../components/Api/FileUploadAPI"
import SecondStep from "./SecondStep";

const stepper = ["Upload Your Image", "AI Analyzing...", "See the Result"];

export default function Stepper() {
    const [currentStep, setCurrentStep] = useState(1);
    const [loadingStep, setLoadingStep] = useState(false);

    const nextStep = () => {
        if (currentStep < stepper.length && !loadingStep) {
            setLoadingStep(true);
            setTimeout(() => {
                setCurrentStep((prev) => prev + 1);
                setLoadingStep(false);
            }, 3000); // 3초 후 다음 단계로 이동
        }
    };

    return (
        <div className="mt-20">
            <div className="rounded-2xl shadow-lg border border-gray-200 max-w-7xl mx-auto p-10">
                <div className="flex items-center">
                    {stepper.map((label, index) => {
                        const stepNumber = index + 1;
                        const isCompleted = currentStep > stepNumber;
                        const isActive = currentStep === stepNumber;

                        return (
                            <React.Fragment key={index}>
                                {/* Step Circle + Label */}
                                <div className="flex flex-col items-center ">
                                    <div
                                        className={`rounded-full w-10 h-10 flex items-center justify-center font-bold transition-all
              ${
                                            isCompleted
                                                ? "bg-green-500 text-white"
                                                : isActive
                                                    ? "bg-blue-600 text-white ring ring-blue-300"
                                                    : "bg-gray-200 text-gray-600"
                                        }`}
                                    >
                                        {isActive && loadingStep ? (
                                            <div
                                                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"/>
                                        ) : isCompleted ? (
                                            "✓"
                                        ) : (
                                            stepNumber
                                        )}
                                    </div>
                                    <div className="mt-3 text-sm font-medium text-center">{label}</div>
                                </div>

                                {/* Connector (not for last step) */}
                                {index !== stepper.length - 1 && (
                                    <div className="flex-1 h-1 bg-gray-300 mx-10 relative">
                                        <div
                                            className={`absolute top-0 left-0 h-1 transition-all duration-500 ${
                                                currentStep > stepNumber
                                                    ? "bg-green-500 w-full"
                                                    : currentStep === stepNumber
                                                        ? "bg-blue-500 w-1/2"
                                                        : "bg-transparent w-0"
                                            }`}
                                        />
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>

            {currentStep === 1 && (
                <FirstStep onUploadComplete={() => {
                    setLoadingStep(true);
                    setTimeout(() => {
                        setLoadingStep(false);
                        setCurrentStep(2);
                    }, 3000);
                }}/>
            )}

            {currentStep === 2 && (
                <SecondStep onUploadComplete={() => setCurrentStep(3)}
                            onLoading={(state) => setLoadingStep(state)} />
            )}
            {currentStep === 3 && (
                <div className="max-w-7xl mx-auto py-10 flex justify-between">
                    <button
                        onClick={nextStep}
                        disabled={currentStep === stepper.length || loadingStep}
                        className="px-5 py-2 bg-blue-600 text-white rounded-lg

                    hover:bg-blue-700 disabled:opacity-50"
                    >
                        {loadingStep ? "Loading..." : "Next"}
                    </button>
                    <button
                        onClick={nextStep}
                        disabled={currentStep === stepper.length || loadingStep}
                        className="px-5 py-2 bg-blue-600 text-white rounded-lg

                    hover:bg-blue-700 disabled:opacity-50"
                    >
                        {loadingStep ? "Loading..." : "Next"}
                    </button>
                </div>
            )}


        </div>
    );
}
