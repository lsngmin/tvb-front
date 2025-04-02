import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import MainText from "../../components/MainText/MainText";
import Introducing from "../../components/Introducing/Introducing";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banners/Banner";
import PageSection from "../../components/PageSection/PageSection";
import Feature from "../../components/Feature/Feature";


const Main = () => {
    return (<>
            <Banner/>
            <Navigation/>
            <PageSection/>
            <Feature/>
            <MainText/>

            {/*<Introducing/>*/}
            <Footer />
        </>
    );
};

export default Main;