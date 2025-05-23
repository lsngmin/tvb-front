import React, {useEffect, useState} from "react";

import Navigation from "../features/navigation/navigation";
import Footer from "../features/footer/footer";
import profileAPI from "../features/profile/api/profileAPI";

const Profile = () => {
    const {fetchData} = profileAPI();
    const [profileData, setProfileData] = useState({});

    useEffect(() => {
        const loadProfileData = async () => {
            try {
                const data = await fetchData();
                setProfileData(data.data);  // 데이터를 상태로 설정
                console.log(data.data);

            } catch (error) {
            }
        };
        loadProfileData();
    }, []);

    return (
        <>
            <Navigation/>
            <div className="max-w-7xl mx-auto mt-20">
                <div className="px-4 sm:px-0">
                    <h3 className="text-base/7 font-semibold text-gray-900">Your Profile</h3>
                    <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details and profile</p>
                </div>

                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm/6 font-medium text-gray-900">Full name</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                        </div>
                    </dl>
                </div>

                <div className="mt-16 px-4 sm:px-0">
                    <h3 className="text-base/7 font-semibold text-gray-900">Account Settings</h3>
                    <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details and profile</p>
                </div>

                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm/6 font-medium text-gray-900">Change Password</dt>
                            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">

                                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                                    </li>
                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                                    </li>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Profile;