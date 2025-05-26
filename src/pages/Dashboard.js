import React from 'react';
import Navigation from "../features/navigation/navigation";
import SideNavigation from "../features/dashboard/sideNavigation";
import SummaryDashboard from "../features/dashboard/summaryDashboard";

const Dashboard = () => {
    return (
        <>
            <Navigation/>
            <div className="flex w-full">
                <SideNavigation/>
                <SummaryDashboard/>
            </div>

        </>
    );
};

export default Dashboard