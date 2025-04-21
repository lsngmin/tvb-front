import React, {useEffect, useState} from "react";
import { useMediaQuery } from 'react-responsive';
import {Transition} from "@headlessui/react";

import FirstStep from "features/freeTrial/firstStep";
import SecondStep from "features/freeTrial/secondStep";
import ThirdStep from "features/freeTrial/thirdStep";

import MobileStepper from "features/freeTrial/components/mobileStepper";
import DesktopStepper from "features/freeTrial/components/desktopStepper";



/**
 * Stepper 컴포넌트는 3단계로 구성된 사용자 가입 또는 이미지 분석 절차를 시각적으로 안내하는 컴포넌트입니다.
 * 데스크탑과 모바일에서 각기 다른 UI로 작동하며, 애니메이션과 단계별 상태 관리를 포함합니다.
 *
 * @returns {Element}
 * @constructor
 */
export default function Stepper() {
    //각 스텝의 이름 입니다.
    const stepper = ["Upload your pic", "2", "S3"];

    // 스텝 및 상태 관리
    const [currentStep, setCurrentStep] = useState(1),
        [loadingStep, setLoadingStep] = useState(false),
        [stepAnimation, setStepAnimation] = useState(true),
        [stepCompleted, setStepCompleted] = useState(false),
        [analyzeResult, setAnalyzeResult] = useState({});

    useEffect(() => {
        if (currentStep === 2 && !stepAnimation) {
            // 약간의 지연을 두고 스텝 2 애니메이션 시작
            const timer = setTimeout(() => {
                setStepAnimation(true);
            }, 50);
            return () => clearTimeout(timer);
        }

        if (currentStep === 3 && !stepAnimation) {
            // 약간의 지연을 두고 스텝 2 애니메이션 시작
            const timer = setTimeout(() => {
                setStepAnimation(true);
            }, 50);
            return () => clearTimeout(timer);
        }

    }, [currentStep]);



    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div className="mt-20">
            {/*isMobile 보다 화면 크기가 크면 DesktopStepper 컴포넌트 렌더링 작으면 MobileStepper 렌더링*/}
            {isMobile ?
                <MobileStepper stepper={stepper}
                               currentStep={currentStep}
                               loadingStep={loadingStep}
                               stepCompleted={stepCompleted}
                />
                :
                <DesktopStepper stepper={stepper}
                                currentStep={currentStep}
                                loadingStep={loadingStep}
                                stepCompleted={stepCompleted}
                />
            }

            {/*Step 1*/}
            {currentStep === 1 && (
                <><Transition
                        show={stepAnimation}
                        leave="transition-all duration-1000 ease-in-out transform"
                        leaveFrom="translate-x-0 opacity-100"
                        leaveTo="translate-x-full opacity-0"
                        afterLeave={() => setCurrentStep(2)}
                ><div>
                    <FirstStep onUploadComplete={() =>  {
                        setStepCompleted(true);
                        setStepAnimation(false)
                    }}
                               onLoading={(state) => setLoadingStep(state)}
                    />
                </div></Transition></>
            )}

            {/*Step 2*/}
            {currentStep === 2 && (
                <><Transition
                        show={stepAnimation}
                        appear={true}
                        enter="transition-all duration-1000 ease-in-out transform"
                        enterFrom="translate-x-full opacity-0"
                        enterTo="translate-x-0 opacity-100"
                        leave="transition-all duration-1000 ease-in-out transform"
                        leaveFrom="translate-x-0 opacity-100"
                        leaveTo="translate-x-full opacity-0"
                        afterLeave={() => setCurrentStep(3)}
                    ><div>
                        <SecondStep onUploadComplete={() => {
                            setStepCompleted(true);
                            setStepAnimation(false)
                        }}
                                    onLoading={(state) => setLoadingStep(state)}
                                    analyzeResult={(result) => setAnalyzeResult(result)}
                        />
                </div></Transition></>
            )}

            {/*Step 3*/}
            {currentStep === 3 && (
                <><Transition
                        show={stepAnimation}
                        enter="transition-all duration-1000 ease-in-out transform"
                        enterFrom="translate-x-full opacity-0"
                        enterTo="translate-x-0 opacity-100"
                        appear={true}
                    ><div>
                        <ThirdStep onUploadComplete={() => setStepCompleted(true)}
                                   onLoading={(state) => setLoadingStep(state)}
                                   analyzeResult={analyzeResult}
                        />
                </div></Transition></>
            )}


        </div>
    );
}
