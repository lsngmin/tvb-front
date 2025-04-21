import React from "react";

const DesktopStepper = ({stepper, currentStep, stepCompleted, loadingStep}) => {

    return (
        <div className="rounded-2xl shadow-lg border border-gray-200 max-w-7xl mx-auto sm:p-10 p-4">
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
                                        (stepCompleted || isCompleted)
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
    )
}
export default DesktopStepper;