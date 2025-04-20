import React from "react";

import Navigation from "../features/navigation/navigation";
import Footer from "../features/footer/footer";
import IssueTable from "features/issues/issueTable";

const Issues = () => {
    return (<>
            <Navigation/>
            <IssueTable/>
            <Footer />
        </>
    );
};

export default Issues;