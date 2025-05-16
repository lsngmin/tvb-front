import React from "react";
import FirstStep from "./firstStep";
import FeatureCardGrid from "./components/featureCardGrid";
import UploadBox from "./components/uploadBox";
import TitleSection from "./components/titleSection";
import BackGroundOverlay from "./components/backGroundOverlay";
export default function analyzeProcess() {


    return (
        <BackGroundOverlay>
            <div className="mt-4 mx-10">
                <div className="grid grid-cols-1 grid-rows-1 gap-10">
                    <div>
                        <TitleSection/>
                        <UploadBox/>
                    </div>
                    <FeatureCardGrid/>
                </div>
            </div>
        </BackGroundOverlay>
    );
}
