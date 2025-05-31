
export const RemainingApiRequests = ({left}) => {
    const leftApiRequests = left;
    return (
        <div
            className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">

                <svg width="1.6em" height="1.6em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 13L12 16M12 16L15 13M12 16V8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="#aaaaaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="flex items-end justify-between mt-5">
                <div><span className="text-sm text-gray-500 dark:text-gray-400">API requests left</span><h4
                    className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">{leftApiRequests}</h4></div>
                <span
                    className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-sm bg-blue-50 text-blue-600"><svg
                    className="fill-current" width="1em" height="1em" viewBox="0 0 13 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"
                                                             d="M6.06462 1.62393C6.20193 1.47072 6.40135 1.37432 6.62329 1.37432C6.6236 1.37432 6.62391 1.37432 6.62422 1.37432C6.81631 1.37415 7.00845 1.44731 7.15505 1.5938L10.1551 4.5918C10.4481 4.88459 10.4483 5.35946 10.1555 5.65246C9.86273 5.94546 9.38785 5.94562 9.09486 5.65283L7.37329 3.93247L7.37329 10.125C7.37329 10.5392 7.03751 10.875 6.62329 10.875C6.20908 10.875 5.87329 10.5392 5.87329 10.125L5.87329 3.93578L4.15516 5.65281C3.86218 5.94561 3.3873 5.94546 3.0945 5.65248C2.8017 5.35949 2.80185 4.88462 3.09484 4.59182L6.06462 1.62393Z"
                                                             fill=""></path></svg>11.01%</span></div>
        </div>
    );
};


export const UsedApiRequests = ({left}) => {
    const leftApiRequests = left;

    return (
        <div
            className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                <svg width="1.6em" height="1.6em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 11L12 8M12 8L9 11M12 8V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="#aaaaaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="flex items-end justify-between mt-5">
                <div><span className="text-sm text-gray-500 dark:text-gray-400">API requests used</span><h4
                    className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">{2000- leftApiRequests}</h4></div>
                <span
                    className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-sm bg-red-100 text-red-600">
                        <svg
                            className="fill-current" width="1em" height="1em" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"
                                                                     d="M5.31462 10.3761C5.45194 10.5293 5.65136 10.6257 5.87329 10.6257C5.8736 10.6257 5.8739 10.6257 5.87421 10.6257C6.0663 10.6259 6.25845 10.5527 6.40505 10.4062L9.40514 7.4082C9.69814 7.11541 9.69831 6.64054 9.40552 6.34754C9.11273 6.05454 8.63785 6.05438 8.34486 6.34717L6.62329 8.06753L6.62329 1.875C6.62329 1.46079 6.28751 1.125 5.87329 1.125C5.45908 1.125 5.12329 1.46079 5.12329 1.875L5.12329 8.06422L3.40516 6.34719C3.11218 6.05439 2.6373 6.05454 2.3445 6.34752C2.0517 6.64051 2.05185 7.11538 2.34484 7.40818L5.31462 10.3761Z"
                                                                     fill=""></path></svg>9.05%</span></div>
        </div>
    );
};
