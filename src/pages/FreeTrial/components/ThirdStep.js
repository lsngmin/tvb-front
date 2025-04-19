import React, {useEffect} from "react";
import FileAnalyzeAPI from "./FileAnalyzeAPI"
import {ClimbingBoxLoader, GridLoader} from "react-spinners";
import ProgressBar from "./progressBar";

export default function ThirdStep({onUploadComplete, onLoading, analyzeResult}) {
    useEffect(() => {
        onLoading(false);
        onUploadComplete();
        }, []);

    return (
        <div className={`max-w-sm sm:max-w-7xl mx-auto p-6 mt-10 rounded-2xl shadow-lg border border-gray-200`}>
            <div className="grid grid-cols-2">
                <ProgressBar progress={analyzeResult.predicted_probability*100} title={"Prediction Probability"} />
                <ProgressBar progress={"version. 1.0.0_release"} title={analyzeResult.used_model}/>

                <ProgressBar progress={analyzeResult.predicted_class} title={"Predicted Class"}/>

                <ProgressBar progress={analyzeResult.prediction_time} title={"Prediction Time"} />
            </div>

        </div>
    );
}
