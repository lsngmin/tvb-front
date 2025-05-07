import React from "react";
import FirstStep from "./firstStep";

export default function analyzeProcess() {

    return (
        <div className="mt-2 mx-10">
            <div className="grid grid-cols-1 grid-rows-1 gap-10">
                <div className="bg-blue-200 p-4">
                    <div>
                        <FirstStep/>
                    </div>
                </div>
                {/*<div className="bg-green-200 p-4">Column 2</div>*/}
            </div>
        </div>

    );
}
