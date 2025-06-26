import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {AUTH_ENDPOINTS} from "../../../api/endPointRoute";


const SignupAPI = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    /**
     * 사용자 정보를 기반으로 회원가입 요청을 보냅니다. 성공 시 사용자 정보와 서버의 응답 정보를 비교 후 맞다면 회원가입 성공으로 메인 페이지 이동
     * 에러 발생 시 에러 설정 후 반환
     * @async
     * @function
     * @param {{ email: string, password: string }} formState - 사용자가 입력한 회원가입 정보
     * @returns {Promise<void>} 비동기로 회원가입 요청을 처리
     */
    const signup = async (formState) => {
        const requestData = {
            user: {
                userId: formState.email,
                loginType: "EMAIL"
            },
            profile: {
                nickname: formState.name
            },
            password: {
                password: formState.password
            }
        };
        try {
            const response = await axios.post(AUTH_ENDPOINTS.SIGNUP, requestData, { withCredentials: true });

            const {userId} = response.data;
            if(userId === formState.email) {
                navigate("/");
            }
        } catch (error) {
            // 에러 발생 시 호출한 컴포넌트에 에러를 전달합니다
            throw Object.assign(new Error(error?.response?.data?.message), {status:error?.response?.status})
        }
    };
    return {signup, error}
}
export default SignupAPI;