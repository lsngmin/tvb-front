import React, {useState} from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

import LoginErrorMessage from "features/login/loginErrorMessage";
import {useAuth} from "providers/authProvider";

export default function SignInForm({changeForm}) {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const { setAccessToken } = useAuth();
    const navigate = useNavigate();
    const [errorStatus, setErrorStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            user: {
                userId: userId
            },
            password: {
                password: password
            },
        };

        try {
            const response = await axios.post(process.env.REACT_APP_API_URL_SIGNIN , requestData, {withCredentials: true });

            const { accessToken } = response.data;
            setAccessToken(accessToken);
            navigate(from, { replace: true });
        } catch (error) {
            setErrorStatus(error?.response?.status)
            setErrorMessage(error?.response?.data?.message);
        }
    }

    const googleLoginHandler = () => {
        window.location.href = process.env.REACT_APP_API_URL_GOOGLE;
    }
    const handleChangeForm = () => {
        changeForm(true)
    }

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md border-2 px-2 py-8">
            <form onSubmit={handleSubmit} className="space-y-6 px-10">
                <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            id="userId"
                            name="userId"
                            type="text"
                            required
                            autoComplete="email"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                            Password
                        </label>
                        <div className="text-sm">
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Forgot password?
                            </a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign in
                    </button>
                </div>
                <div>
                    <LoginErrorMessage
                        status={errorStatus}
                        message={errorMessage}
                        onClose={() => {
                            setErrorStatus(null);
                            setErrorMessage(null);
                        }}
                    />
                </div>
            </form>

            <div className="relative my-8 flex w-full items-center">
                <div className="flex-1 border-gray-500 border-t-2 border-dotted ml-10"/>
                <span className="bg-white px-4 font-medium text-gray-500">OR</span>
                <div className="flex-1 border-gray-500 border-t-2 border-dotted mr-10"/>
            </div>
            <div className="mx-10">
                <button
                    onClick={googleLoginHandler}
                    className="flex h-10 w-full items-center justify-center gap-2 rounded-md border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google"
                        className="h-[18px] w-[18px] "/>Continue with
                    Google
                </button>
            </div>
            <p className="mt-10 text-center text-sm/6 text-gray-500">
                Not a member yet? {' '}
                <button className="font-semibold text-indigo-600 hover:text-indigo-500" onClick={handleChangeForm}>
                    Register Now
                </button>
            </p>
        </div>
    )
}
