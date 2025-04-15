import axios from "axios";
import {useAuth} from "./Auth/AuthProvider";

const FileUploadAPI = () =>  {
    const {accessToken} = useAuth();

    const fileUpload = async (file) => {
        try {
            const formData = new FormData();
            formData.append("files", file);

            return await axios.post(process.env.REACT_APP_API_URL_UPLOAD, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${accessToken}`
                }, withCredentials: true
            })
        } catch (err) {
            console.error("업로드 실패:", err);
        }
    }
    return {fileUpload}

};

export default FileUploadAPI


