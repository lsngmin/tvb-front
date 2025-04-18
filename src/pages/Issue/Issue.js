import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import MainText from "../../components/MainText/MainText";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banners/Banner";
import PageSection from "../../components/PageSection/PageSection";
import Feature from "../../components/Feature/Feature";
import IssueTable from "./components/IssueTable";


const Issue = () => {
    return (<>
            <Navigation/>
            <IssueTable/>
            <Footer />
        </>
    );
};

export default Issue;