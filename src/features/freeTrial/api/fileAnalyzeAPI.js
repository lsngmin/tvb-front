import axios from "axios";
import {useAuth} from "providers/authProvider";
import {useUpload} from "features/freeTrial/provider/uploadProvider";
import {FREETRIAL_ENDPOINTS} from "../../../api/endPointRoute";


const FileAnalyzeAPI = () =>  {
    const {accessToken} = useAuth();
    const {uploadData} = useUpload();
    /**
     * 사용자의 img를 가지고 분석 요청을 보냅니다.
     * img file name은 uuid로 저장되어 있으며 사용자가 img upload 요청을 보낸 후 받은 img uuid를 가지고 분석 요청을 보닙니다.
     * 중간과정에서 다른 이미지로 변경되거나 중복으로 이미지를 업로드 하는 경우를 제거하고 트래픽이 과도하게 발생할 경우 엔드포인트의 책임을 줄이기 위해 분리
     *
     * uploadData - 사용자가 업로드 한 img의 uuid 입니다
     *
     * @async
     * @function
     * @returns {Promise<axios.AxiosResponse<any>>} - 분석 결과를 반환합니다. 형태는 JSON입니다.
     */
    const fileAnalyze = async () => {
        try {
            return await axios.post(`${FREETRIAL_ENDPOINTS.ANALYZE}/${uploadData}/analyze`, null, {
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


