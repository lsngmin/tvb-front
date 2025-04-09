import React, {useEffect, useState} from "react";
import {useAuth} from "./Api/Auth/AuthProvider";
import {Link, useNavigate} from "react-router-dom";

export default function MobileNavigationAuthButton() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { accessToken, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // 페이지 로드될 때 토큰 확인
        if (accessToken) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [accessToken]);

    {/*<a*/}
    {/*    href="#"*/}
    {/*    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"*/}
    {/*>*/}
    {/*    Log in*/}
    {/*</a>*/}

    return (
        <>
            {isLoggedIn ? (
                <>
                    <div className="mb-2 rounded-lg py-2.5 px-3 -mx-3  text-sm/6 text-gray-600  ring-gray-900/10 hover:bg-gray-50">
                        <a href="#" className="font-semibold text-indigo-600">View Dashboard</a>
                    </div>
                    <Link className="my-2 -mx-3 px-3 py-2.5 block rounded-lg text-base/7 font-semibold text-gray-900 hover:bg-gray-50" onClick={logout}>
                        Log out <span aria-hidden="true">&rarr;</span>
                    </Link>
                </>

            ) : (
                <Link className="my-2 -mx-3 px-3 py-2.5 block rounded-lg text-base/7 font-semibold text-gray-900 hover:bg-gray-50" to="/login">
                    Log in <span aria-hidden="true">&rarr;</span>
                </Link>
            )}
        </>
    );
}
