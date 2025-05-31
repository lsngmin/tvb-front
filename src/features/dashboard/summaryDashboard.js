import {useEffect, useRef, useState} from "react";
import { Transition } from '@headlessui/react';
import ApiKeyCard from "./components/apiKeyCard";
import { UsedApiRequests, RemainingApiRequests } from "./components/apiUsageCard";
import ApiTargetCard from "./components/apiTargetCard";
import AnalysisHistory from "./analysisHistory";
import DonutChart from "./analysisHistory";
import {useAuth} from "../../providers/authProvider";
import {DashboardAPI} from "./api/dashboardAPI";

const SummaryDashboard = ({ selected }) => {
    const { accessToken } = useAuth();
    const {fetchData} = DashboardAPI();
    const [apiRequestLeft, setApiRequestLeft] = useState(null);
    useEffect(() => {
        if(!accessToken) {
            return;
        }
        const loadDashboard = async () => {
            try {
                const data = await fetchData();
                setApiRequestLeft(data.data.apiRequestsLeft);
            } catch (error) {
            }
        };
        loadDashboard();
    }, [accessToken]);


    return (
        <div className="flex-1 p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6 bg-gray-100">
            <div className="grid grid-cols-6 gap-4 md:gap-6">
                <div className="col-span-12 space-y-6 xl:col-span-7">
                    {selected === 'analysis' &&
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
                            <DonutChart />
                        </div>
                    }
                    {selected === 'dashboard' &&
                        <>
                            <ApiKeyCard/>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
                                <RemainingApiRequests left={apiRequestLeft}/>
                                <UsedApiRequests left={apiRequestLeft}/>
                            </div>
                            <ApiTargetCard left={apiRequestLeft}/>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};
export default SummaryDashboard;