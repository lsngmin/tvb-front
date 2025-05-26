import React, {useState} from 'react';
import Navigation from "../features/navigation/navigation";
import SideNavigation from "../features/dashboard/sideNavigation";
import SummaryDashboard from "../features/dashboard/summaryDashboard";

const Dashboard = () => {
    const [selected, setSelected] = useState('dashboard');

    return (
        <>
            <Navigation/>
            <div className="flex w-full">
                <SideNavigation setSelected={setSelected}/>
                <SummaryDashboard selected={selected}/>
            </div>

        </>
    );
};

export default Dashboard