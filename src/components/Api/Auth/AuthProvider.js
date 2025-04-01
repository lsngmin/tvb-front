import {createContext, useContext, useEffect, useState} from "react";

import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const logout = () => {
        setAccessToken(null);
        setUserInfo(null);

        axios.post(process.env.REACT_APP_API_URL_LOGOUT, {}, {
            withCredentials: true
        })
        setTimeout(() => {
            window.location.reload();
        }, 100)
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
        <AuthContext.Provider value={{ accessToken, setAccessToken, userInfo, setUserInfo, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);
