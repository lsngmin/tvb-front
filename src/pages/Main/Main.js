import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import MainText from "../../components/MainText/MainText";
import Introducing from "../../components/Introducing/Introducing";
import Footer from "../../components/Footer/Footer";
import {useAuth} from "../../components/Api/Auth/AuthProvider";



const Main = () => {
    return (
        <div className="XJQ6AKZ">
            <header>
                <Navigation/>
            </header>
            <MainText/>
            {/*<CallToAction/>*/}
            <Introducing/>
            <Footer />
        </div>
    );
};

export default Main;