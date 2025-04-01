import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import MainText from "../../components/MainText/MainText";
import Introducing from "../../components/Introducing/Introducing";
import Footer from "../../components/Footer/Footer";

const Main = () => {
    return (<>
            <Navigation/>
            <MainText/>
            <Introducing/>
            <Footer />
        </>
    );
};

export default Main;