import React from "react";

import Navigation from "../features/navigation/navigation";
import MainText from "features/main/mainText";
import Footer from "../features/footer/footer";
import Banner from "../features/banner/banner";
import PageSection from "features/main/pageSection";
import Feature from "features/main/feature";


const Main = () => {
    return (<>
            <Banner/>
            <Navigation/>
            <PageSection/>
            <Feature/>
            <MainText/>
            <Footer />
        </>
    );
};

export default Main;