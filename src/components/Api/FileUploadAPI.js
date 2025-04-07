import axios from "axios";
import {useAuth} from "./Auth/AuthProvider";
import {useUpload} from "../../pages/FreeTrial/components/UploadProvider";

const FileUploadAPI = () =>  {
    const {accessToken} = useAuth();
    const {setUploadData} = useUpload();
    const fileUpload = async (file) => {
        try {
            const formData = new FormData();
            formData.append("files", file);

            const res = await axios.post(process.env.REACT_APP_API_URL_UPLOAD, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${accessToken}`
                }, withCredentials: true
                    })
                .then(response => {
                    console.log(response.data[0]);
                    setUploadData(response.data[0])
                    }
                )
        } catch (err) {
            console.error("업로드 실패:", err);
        }
    }
    return {fileUpload}

};

export default FileUploadAPI


