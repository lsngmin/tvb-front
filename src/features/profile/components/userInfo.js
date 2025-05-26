import React, {useEffect, useState} from "react";
import profileAPI from "../api/profileAPI";
import {useAuth} from "../../../providers/authProvider";
export default function UserInfo() {

    const {fetchData} = profileAPI();
    const [profileData, setProfileData] = useState({});
    const { accessToken } = useAuth();

    useEffect(() => {
        if(!accessToken) {
            return;
        }
        const loadProfileData = async () => {
            try {
                const data = await fetchData();
                setProfileData(data.data);  // 데이터를 상태로 설정
                console.log(data.data);

            } catch (error) {
            }
        };
        loadProfileData();
    }, [accessToken]);

    let userId = profileData.userId;
    let nickname = profileData.nickname;

return (
    <div className="min-w-[800px]">
        <div className="px-4 sm:px-0 border-b border-gray-200 pb-3">
            <h3 className="text-xl text-gray-900">Public Profile</h3>
            {/*<p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details and profile</p>*/}
        </div>

        <div className="">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                    <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                        Email Address
                    </label>
                    <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                            {/*<div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">workcation.com/</div>*/}
                            <input
                                readOnly
                                id="username"
                                name="username"
                                type="text"
                                value={userId}
                                className="block min-w-0 grow py-3 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                    <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                        Name
                    </label>
                    <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                            {/*<div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">workcation.com/</div>*/}
                            <input
                                readOnly
                                id="username"
                                name="username"
                                type="text"
                                value={nickname}
                                className="block min-w-0 grow py-3 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-12 px-4 sm:px-0 border-b border-gray-200 pb-3">
            <h3 className="text-xl text-gray-900">Account Settings</h3>
            {/*<p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details and profile</p>*/}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                    Change Password
                </label>
                <div className="mt-2">
                    <div className="relative mb-3">
                        <input type="text" id="current_password"
                               className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" "/>
                        <label htmlFor="current_password"
                               className="absolute text-sm text-gray-500  duration-300 transform-translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            Current Password
                        </label>
                    </div>
                    <div className="relative mb-3">
                        <input type="text" id="password"
                               className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" "/>
                        <label htmlFor="password"
                               className="absolute text-sm text-gray-500  duration-300 transform-translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            Password
                        </label>
                    </div>
                    <div className="relative mb-3">
                        <input type="text" id="confirm_password"
                               className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" "/>
                        <label htmlFor="confirm_password"
                               className="absolute text-sm text-gray-500  duration-300 transform-translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            Confirm Password
                        </label>
                    </div>
                    <button
                        className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                    >Change
                    </button>
                </div>
            </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                    Delete Account
                </label>
                <div className="mt-2">
                    <button
                        className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
);
};