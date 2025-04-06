import Logo from "../../logo.svg";
import React, {useState} from "react";
import axios from "axios";
import {useAuth} from "../../components/Api/Auth/AuthProvider";
import {useNavigate} from "react-router-dom";
import LoginMessage from "../../components/LoginMessage";
//import {} from "../../components/Login/LoginMessage";

export default function Login() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const { setAccessToken } = useAuth();
    const navigate = useNavigate();

    const [errorStatus, setErrorStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userId, password);
        const prod_url = "https://api.tvsbox.click";
        const loca_url = "http://localhost:8080"; // 로컬 테스트용 URL 주석 처리
        const path = loca_url + "/api/v1/auth/login";

        const requestData = {
            user: {
                userId: userId
            },
            password: {
                password: password
            },
        };

        try {
            const response = await axios.post(path, requestData, {withCredentials: true });

            const { accessToken } = response.data;
            setAccessToken(accessToken);
            navigate("/");
        } catch (error) {
            setErrorStatus(error?.response?.status)
            setErrorMessage(error?.response?.data?.message);
        }
    }
    const googleLoginHandler = () => {
        window.location.href = process.env.REACT_APP_API_URL_GOOGLE;
    }
    return (
        <div className="mx-auto flex max-w-7xl items-center bg-white">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-32">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/*<img className="mx-auto h-10 w-auto" src={Logo} alt="truebox"/>*/}
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

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
                            <LoginMessage
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
                        Not a member?{' '}
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Start a 14 day free trial
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
