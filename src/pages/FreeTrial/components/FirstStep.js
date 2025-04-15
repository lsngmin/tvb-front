import React, {useEffect} from "react";
import FileUploadAPI from "../../../components/Api/FileUploadAPI"
import FileUploader from "./FirstStepFileUploader";
import {useUpload} from "./UploadProvider";


export default function FirstStep({onUploadComplete, onLoading, hasUploaded}) {
    const {setUploadData} = useUpload();

    const {fileUpload} = FileUploadAPI();

    const handleFileChange = async (file) => {
        onLoading(true);

        const response = await fileUpload(file);
        setUploadData(response.data[0])
        if (response?.status === 200) {
            onLoading(false);
            onUploadComplete();
            console.log(response.status);
            hasUploaded(true)
        } else {
            onLoading(false);
        }
    };

    return (
     <div className={`max-w-sm sm:max-w-7xl mx-auto p-6 mt-10 rounded-2xl shadow-lg border border-gray-200`}>
         <FileUploader onUpload={handleFileChange} />
     </div>
 );
}
