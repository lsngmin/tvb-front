import React from "react";
import FirstStep from "./firstStep";
import FeatureCardGrid from "./components/featureCardGrid";
export default function analyzeProcess() {

    return (
        <div className="mt-2 mx-10">
            <div className="grid grid-cols-1 grid-rows-1 gap-10">
                <div className="">
                    <div className="items-center justify-center gap-2 mt-4">
                        <h2 className="text-gray-600 font-bold text-4xl tracking-tight text-center ">
                            Manipulated Image Detection
                        </h2>

                        <p className="text-xs font-extralight text-gray-500 tracking-tight text-center mt-2">
                            Please upload an image that you find suspicious.
                        </p>
                    </div>

                    <div>
                        <FirstStep/>
                    </div>
                </div>
            <FeatureCardGrid/>
            </div>
        </div>

    );
}
