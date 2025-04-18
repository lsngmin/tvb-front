import React, {useEffect, useState} from "react";
import IssueFetchDataAPI from "./IssueFetchDataAPI";
import dayjs from "dayjs";


function IssueTable() {
    const {fetchData} = IssueFetchDataAPI();
    const [issuesData, setIssuesData] = useState([]);

    useEffect(() => {
        const loadIssuesData = async () => {
            try {
                const data = await fetchData();
                setIssuesData(data.data);  // 데이터를 상태로 설정
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        loadIssuesData();
    }, []);

    console.log(issuesData)
    return (
        <>
            <div className="max-w-7xl mx-auto pt-20 px-10">
                <h1 class="sm:text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400">
                    Overview of Current Open Issues

                </h1>
                <div className="gap-1 grid grid-cols-1 sm:gap-10 pt-20 px-1 sm:px-32 w-full max-w-7xl mx-auto">

                    {issuesData.length > 0 ? (
                        issuesData.map((issue) => (
                    <div>
                        <div className="flex justify-between pb-1">
                            <span className="inline-flex items-center m-2 px-2 py-1 bg-gray-200 rounded-lg text-xxs sm:text-sm font-semibold text-gray-600">
                                <span className="">Latest Updated At. {dayjs(issue.updated_at).format("MM/DD")}</span>
                            </span>

                            <span className="inline-flex items-center m-2 px-3 py-1 bg-green-200 hover:bg-green-300 rounded-lg text-xxs sm:text-sm font-semibold text-green-600">
                                <span className="">Current Status. {issue.state.toUpperCase()}</span>
                            </span>
                        </div>
                        <div
                            key={issue.id}
                            className="p-4 border border-gray-300 rounded-lg "
                        >
                            <h3 className="text-sm sm:text-lg font-semibold">{issue.title}&nbsp; #{issue.number} - </h3>
                            <p className="text-xs sm:text-sm text-gray-500 mt-1.5 ml-1.5 mb-1">{issue.body}</p>
                            <span className="inline-flex items-center rounded-md bg-gray-50 mt-1 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
                                Affected Server. TrueVisionBoxAPIServer
                            </span>
                        </div>
                    </div>

                        ))
                        ) : (
                        <p>이슈 데이터가 없습니다.</p>  // 데이터를 불러오기 전에 나타날 메시지
                        )}
                </div>
            </div>
        </>
);
}

export default IssueTable;
