import axios from "axios";
import {useAuth} from "providers/authProvider";
import {DASHBOARD_ENDPOINTS} from "../../../api/endPointRoute";

export const DashboardAPI = () => {

    const {accessToken} = useAuth();

    const fetchData = async () => {
        try {
            return await axios.get(DASHBOARD_ENDPOINTS.GET_INFO, {
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

export const GenerateApiKeyAPI = () => {
    const {accessToken} = useAuth();

    const generateToken = async () => {
        try {
            return await axios.post(DASHBOARD_ENDPOINTS.GENERATE, {}, {
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }, withCredentials: true
            })
        } catch (err) {
            console.error("데이터 불러오기 실패:", err);
        }
    }
    return {generateToken}
}