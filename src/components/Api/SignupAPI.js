import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupAPI = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const signup = async (formState) => {
        try {
            const requestData = {
                user: {
                    userId: formState.email,
                    loginType: "EMAIL"
                },
                profile: {
                    nickname: String(Math.floor(Math.random() * 100000))
                },
                password: {
                    password: formState.password
                }
            };
            const response = await axios.post(process.env.REACT_APP_API_URL_SIGNUP, requestData, { withCredentials: true });
            const {userId} = response.data;

            if(userId === formState.email) {
                navigate("/");
            }
        } catch (err) {
            setError('회원가입 중 오류가 발생했습니다.');
        }
    };
    return {signup, error}
}
export default SignupAPI;