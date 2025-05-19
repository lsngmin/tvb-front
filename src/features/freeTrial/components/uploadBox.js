import React, {useState} from "react";
import FileUploader from "../firstStepFileUploader";
import {useUpload} from "../provider/uploadProvider";
import FileUploadAPI from "../api/fileUploadAPI";
import StartAnalyzeButton from "./startAnalyzeButton";
import Spinner from "./loadingSpinner";

const UploadBox = () => {
    const {setUploadData} = useUpload();
    const {fileUpload} = FileUploadAPI();
    const [image, setImage] = useState();
    const [startAnalyze, setStartAnalyze] = useState(false);


    /**
     *  파일을 받으면 onLoading을 true로 변경하여 LoadingSpinner가 동작하게 합니다.
     *  fileUpload API를 호출하고 정상흐름이라면 스피너의 동작을 멈추고 onUploadComplete를 통해 완료됐다는 동작을 전달하여 애니메이션이 동작하도록 합니다.
     *
     *  error가 발생하면 스피너의 동작을 멈추고 예외처리 합니다.
     *
     * @param file - onUpload에 저장된 사용자가 업로드한 파일입니다
     * @returns {Promise<void>} - 반환값은 존재하지 않지만 API요청을 통해 받아온 사진의 UUID를 provider에 전역적으로 저장하여 분석 요청 API에 사용됩니다.
     */

    const handleFileChange = async (file) => {
        const response = await fileUpload(file);//todo fileUpload API에서 에러가 발생할 경우 throws 하는 에러를 catch하는 로직이 필요합니다.
        //provider에 사진의 UUID를 저장합니다.
        setUploadData(response.data[0])
        if (response?.status === 200) {
            const url = URL.createObjectURL(file);
            setImage(url);
        } else {
            //todo 에러 발생 시 예외처리 로직이 필요합니다.
        }
    };

    const handleResetImage = () => {
        URL.revokeObjectURL(image)
        setImage(undefined);
    }
    const handleStartAnalyze = () => {
        setStartAnalyze(true)
    }

    return (
        <>
            {image
                ?
                <div className={`max-w-sm sm:max-w-4xl mx-auto p-6 mt-10 rounded-2xl shadow-lg border border-gray-200`}>
                    <div className="flex flex-col items-center justify-center h-64 gap-4">
                        <img src={image} alt="Preview" className="cursor-pointer"/>
                        {startAnalyze
                            ?
                            <Spinner/>
                            :
                            <StartAnalyzeButton resetImage = {handleResetImage} startAnalyze={handleStartAnalyze}/>
                        }
                    </div>

                </div>
                :
                <div className={`max-w-sm sm:max-w-4xl mx-auto p-6 mt-10 rounded-2xl shadow-lg border border-gray-200`}>
                    <FileUploader onUpload={handleFileChange} />
                </div>

            }
        </>
    );
};

export default UploadBox;