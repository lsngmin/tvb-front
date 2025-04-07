import axios from "axios";
import {useAuth} from "../../../components/Api/Auth/AuthProvider";
import {useUpload} from "./UploadProvider";

const FileAnalyzeAPI = () =>  {
    const {accessToken} = useAuth();
    const {uploadData} = useUpload();
    const fileAnalyze = async () => {
        try {
            return await axios.post(`${process.env.REACT_APP_API_URL_ANALYZE}/${uploadData}/analyze`, null, {
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }, withCredentials: true
            });
        } catch (err) {
            console.error("업로드 실패:", err);
        }
    }
    return {fileAnalyze}

};

export default FileAnalyzeAPI


