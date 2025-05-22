import React from "react";

import Navigation from "../features/navigation/navigation";
import MainText from "features/main/mainText";
import Footer from "../features/footer/footer";
import Banner from "../features/banner/banner";
import PageSection from "features/main/pageSection";
import Feature from "features/main/feature";


const Profile = () => {
    return (
        <>
            <Navigation/>
            <p>
                사용자 프로필 페이지
            </p>
            <Footer />
        </>
    );
};

export default Profile;