import axios from "axios";
import {useAuth} from "providers/authProvider";
import {PROFILE_ENDPOINTS} from "../../../api/endPointRoute";


const IssueFetchDataAPI = () => {
    const {accessToken} = useAuth();

    const fetchData = async () => {
        try {
            return await axios.get(PROFILE_ENDPOINTS.GET_INFO, {
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }, withCredentials: true
            })
        } catch (err) {
            console.error("데이터 불러오기 실패:", err);
        }
    }
    return {fetchData}
}
export default IssueFetchDataAPI;