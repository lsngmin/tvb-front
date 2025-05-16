import React from "react";
import FileUploader from "../firstStepFileUploader";

const UploadBox = () => {
    return (
        <div className={`max-w-sm sm:max-w-4xl mx-auto p-6 mt-10 rounded-2xl shadow-lg border border-gray-200`}>
            <FileUploader onUpload={""} />
        </div>
    );
};

export default UploadBox;