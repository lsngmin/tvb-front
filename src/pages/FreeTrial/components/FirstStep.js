import React from "react";
import FileUploadAPI from "../../../components/Api/FileUploadAPI"
import FileUploader from "./FirstStepFileUploader";

export default function FirstStep({onUploadComplete}) {
    const {fileUpload} = FileUploadAPI();

    const handleFileChange = async (file) => {
        await fileUpload(file);
        onUploadComplete();
    };

    return (
     <div className={`max-w-7xl mx-auto p-6 mt-10 rounded-2xl shadow-lg border border-gray-200`}>
         <FileUploader onUpload={handleFileChange} />
     </div>
 );
}
