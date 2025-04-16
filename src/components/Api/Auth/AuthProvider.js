import {createContext, useContext, useEffect, useState} from "react";

import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const logout = () => {
        setAccessToken(null);
        setUserInfo(null);

        axios.post(process.env.REACT_APP_API_URL_LOGOUT, {}, {
            withCredentials: true
        })
        setTimeout(() => {
            window.location.reload();
        }, 1000)
    }

    useEffect(() => {
        const fetchAccessToken = async () => {
            try {
                if (!accessToken) {
                    const response = await axios.post(process.env.REACT_APP_API_URL_REFRESH, {}, {withCredentials: true})
                    setAccessToken(response.data.accessToken)
                }
            } catch (error) {
                if (error.response.status === 401) {
                    console.log("401");
                }
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
                axios.get(process.env.REACT_APP_API_URL_ME, {
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                        'X-RequestID': crypto.randomUUID()
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
