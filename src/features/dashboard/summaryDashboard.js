import {useRef, useState} from "react";
import { Transition } from '@headlessui/react';
import ApiKeyCard from "./components/apiKeyCard";
import { UsedApiRequests, RemainingApiRequests } from "./components/apiUsageCard";
import ApiTargetCard from "./components/apiTargetCard";
import AnalysisHistory from "./analysisHistory";
import DonutChart from "./analysisHistory";

const SummaryDashboard = ({ selected }) => {
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
                                <RemainingApiRequests/>
                                <UsedApiRequests/>
                            </div>
                            <ApiTargetCard/>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};
export default SummaryDashboard;