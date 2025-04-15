import React from "react";
const MobileStepperComponent = ({currentStep, loadingStep, stepper, hasUploaded}) => {
    return (
        <div className="rounded-2xl shadow-lg border border-gray-200 max-w-sm mx-auto p-4 animate-floating duration-500">
            <div className="items-center flex flex-col">
                {/* Step Circle + Label */}
                <div className={`rounded-full w-10 h-10 flex items-center justify-center font-bold transition-all bg-blue-600 text-white ring ring-blue-300`}>
                    {
                        loadingStep ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : hasUploaded ? ("✓") : (currentStep)
                    }
                </div>
                <div className="mt-3 text-sm font-semibold text-center">
                    {stepper[currentStep - 1]}
                </div>
            </div>
        </div>
    )
};
export default MobileStepperComponent;