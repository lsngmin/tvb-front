import axios from "axios";
import {useAuth} from "providers/authProvider";

const FileUploadAPI = () =>  {
    const {accessToken} = useAuth();
    /**
     * 사용자가 업로드한 파일의 유효성을 검사 후 파일을 formData에 넣어 post 요청을 보냅니다. 액세스 토큰을 가지고 있어야 업로드 가능
     *
     * @param file - 사용자가 업로드 한 이미지 파일입니다.
     * @returns {Promise<axios.AxiosResponse<any>>} - 반환값은 파일의 uuid 입니다.
     */
    const fileUpload = async (file) => {
        //todo file의 유효성 검사가 진행되지 않습니다. 로직 추가 필요
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


