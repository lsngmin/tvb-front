import React from "react";

const TitleSection = () => {
    return (
        <div className="items-center justify-center gap-2 mt-8">
            <h2 className="text-gray-600 font-extrabold text-4xl tracking-tight text-center h-full mt-32">
                Manipulated Image Detection
            </h2>

            <p className="text-xs font-light text-gray-600 tracking-tight text-center mt-2">
                Please upload an image that you find suspicious.
            </p>
        </div>
    )
};
export default TitleSection;