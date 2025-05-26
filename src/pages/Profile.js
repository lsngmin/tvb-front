import React, {useEffect, useState} from "react";

import Navigation from "../features/navigation/navigation";
import Footer from "../features/footer/footer";
import profileAPI from "../features/profile/api/profileAPI";
import {useAuth} from "../providers/authProvider";
import Sidebar from "../features/profile/components/sideBar";
import UserInfo from "../features/profile/components/userInfo";

const Profile = () => {


    return (
        <>
            <Navigation/>
            <div className="flex flex-1 mt-14">
                <Sidebar/>
                <UserInfo/>
            </div>

            <Footer />
        </>
    );
};

export default Profile;