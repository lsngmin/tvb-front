import {createContext, useContext, useEffect, useState} from "react";

import axios from "axios";
import {AUTH_ENDPOINTS} from "../api/endPointRoute";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const logout = () => {
        setAccessToken(null);
        setUserInfo(null);

        axios.post(AUTH_ENDPOINTS.SIGNOUT, {}, {
            withCredentials: true
        })
        setTimeout(() => {
            window.location.reload();
        }, 1000)
    }

    useEffect(() => {
        const fetchAccessToken = async () => {
            try {
                if (!accessToken) {//액세스 토큰 X -> refresh 호출 -> 액세스 토큰 발급
                    const response = await axios.post(AUTH_ENDPOINTS.REFRESH, {}, {withCredentials: true})
                    setAccessToken(response.data.accessToken)
                }
            } catch (error) {
                //통신 에러 -> 프론트엔드 측 문제 X -> 페이지 정상 렌더링 필요
            } finally {
                setIsLoading(false);
            }
        }
        fetchAccessToken();
    }, []);

    useEffect(() => {
        if (!accessToken) return;

        const fetchUserData = async () => {
            if (accessToken) {
                axios.get(AUTH_ENDPOINTS.ME, {
                    headers: {
                        "Authorization": `Bearer ${accessToken}`
                    },
                    withCredentials: true
                })
                    .then(response => {
                        setUserInfo(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        };
        fetchUserData();
    },  [accessToken]);
    return (
        <AuthContext.Provider value={{ accessToken, setAccessToken, userInfo, setUserInfo, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);
