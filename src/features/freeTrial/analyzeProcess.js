import React from "react";
import FirstStep from "./firstStep";

export default function analyzeProcess() {

    return (
        <div className="mt-2 mx-10">
            <div className="grid grid-cols-1 grid-rows-1 gap-10">
                <div className="bg-blue-200 p-4">
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
                <div className="flex gap-4 items-center justify-center mt-4">
                    <div className="rounded-full bg-gray-600 flex items-center justify-center">
                        G
                    </div>
                    <div className="bg-gray-100 p-4">Item 2</div>
                    <div className="bg-gray-100 p-4">Item 3</div>
                </div>
            </div>
        </div>

    );
}
