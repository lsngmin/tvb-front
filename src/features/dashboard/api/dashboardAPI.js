import axios from "axios";
import {useAuth} from "providers/authProvider";

export const DashboardAPI = () => {
    const {accessToken} = useAuth();

    const fetchData = async () => {
        try {
            return await axios.get(process.env.REACT_APP_API_URL_DASHBOARD, {
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
            return await axios.post(process.env.REACT_APP_API_URL_DASHBOARD_GENERATE, {}, {
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