import React, {useEffect, useState} from "react";
import { useMediaQuery } from 'react-responsive';
import {Transition} from "@headlessui/react";

import FirstStep from "features/freeTrial/firstStep";
import SecondStep from "features/freeTrial/secondStep";
import ThirdStep from "features/freeTrial/thirdStep";

import MobileStepper from "features/freeTrial/components/mobileStepper";

const stepper = ["Upload your pic", "2", "S3"];

export default function Stepper() {
    const [currentStep, setCurrentStep] = useState(1);
    const [loadingStep, setLoadingStep] = useState(false);
    const [stepAnimation, setStepAnimation] = useState(false);
    const [hasUploaded, setHasUploaded] = useState(false);
    const [showTransition, setShowTransition] = useState(true);
    const [showStep2Animation, setShowStep2Animation] = useState(false);
    const [analyzeResult, setAnalyzeResult] = useState({});
    const [finalCompleted, setFinalCompleted] = useState(false);

    const handleAnalyzeResult = (result) => {
        setAnalyzeResult(result);
    }

    const nextStep = () => {
        if (currentStep < stepper.length && !loadingStep) {
            setLoadingStep(true);
            setTimeout(() => {
                setCurrentStep((prev) => prev + 1);
                setLoadingStep(false);
            }, 3000); // 3초 후 다음 단계로 이동
        }
    };

    const handleUploadComplete = () => {
        setStepAnimation(true);  // 애니메이션 활성화
    };

    useEffect(() => {
        if (currentStep === 2 && !showStep2Animation) {
            // 약간의 지연을 두고 스텝 2 애니메이션 시작
            const timer = setTimeout(() => {
                setShowStep2Animation(true);
            }, 50);
            return () => clearTimeout(timer);
        }
        if (currentStep === 3 && !showStep2Animation) {
            // 약간의 지연을 두고 스텝 2 애니메이션 시작
            const timer = setTimeout(() => {
                setShowStep2Animation(true);
            }, 50);
            return () => clearTimeout(timer);
        }

    }, [currentStep]);

    const DesktopComponent = () => <div className="rounded-2xl shadow-lg border border-gray-200 max-w-7xl mx-auto sm:p-10 p-4">
        <div className="flex items-center">
            {stepper.map((label, index) => {
                const stepNumber = index + 1;
                const isCompleted = currentStep > stepNumber;
                const isActive = currentStep === stepNumber;

                return (
                    <React.Fragment key={index}>
                        <div className="flex flex-col items-center ">
                            <div
                                className={`rounded-full w-10 h-10 flex items-center justify-center font-bold transition-all
              ${
                                    (finalCompleted || isCompleted)
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

    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div className="mt-20">
            {isMobile ? null : <DesktopComponent />}
            {currentStep === 1 && (
                <>
                    <div
                        className={`transition-all duration-1000 ease-in-out transform ${
                            stepAnimation ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
                        }`}
                        onTransitionEnd={() => {
                            if (stepAnimation) {
                                setCurrentStep(2);
                            }
                        }}
                    >
                    {isMobile ? <MobileStepper currentStep={currentStep}
                                               loadingStep={loadingStep}
                                               stepper={stepper}
                                               hasUploaded={hasUploaded}
                    />: null}


                    <FirstStep onUploadComplete={handleUploadComplete}
                               onLoading={(state) => setLoadingStep(state)}
                               hasUploaded={(state) => setHasUploaded(state)}
                    />
                    </div>
                </>
            )}

            {currentStep === 2 && (
                <>
                    <Transition
                        show={showStep2Animation}
                        appear={true}
                        enter="transition-all duration-1000 ease-in-out transform"
                        enterFrom="translate-x-full opacity-0"
                        enterTo="translate-x-0 opacity-100"
                        leave="transition-all duration-1000 ease-in-out transform"
                        leaveFrom="translate-x-0 opacity-100"
                        leaveTo="translate-x-full opacity-0"
                        afterLeave={() => setCurrentStep(3)}
                    >
                        <div>
                            {isMobile ? (
                                <MobileStepper
                                    currentStep={currentStep}
                                    loadingStep={loadingStep}
                                    stepper={stepper}
                                    hasUploaded={hasUploaded}
                                />
                            ) : null}
                            <SecondStep
                                onUploadComplete={() => setShowStep2Animation(false)}
                                onLoading={(state) => setLoadingStep(state)}
                                analyzeResult={handleAnalyzeResult}
                                onShowStep2Animation={(state) => setShowStep2Animation(state)}
                            />
                        </div>
                    </Transition>
                </>
            )}
            {currentStep === 3 && (
                <>
                    <Transition
                        show={showStep2Animation}
                        enter="transition-all duration-1000 ease-in-out transform"
                        enterFrom="translate-x-full opacity-0"
                        enterTo="translate-x-0 opacity-100"
                        appear={true}
                    >
                        <div>
                            {isMobile ? (
                                <MobileStepper
                                    currentStep={currentStep}
                                    loadingStep={loadingStep}
                                    stepper={stepper}
                                    hasUploaded={hasUploaded}
                                />
                            ) : null}
                            <ThirdStep
                                onUploadComplete={() => setFinalCompleted(true)}
                                onLoading={(state) => setLoadingStep(state)}
                                analyzeResult={analyzeResult}
                            />
                        </div>
                    </Transition>
                </>
            )}


        </div>
    );
}
