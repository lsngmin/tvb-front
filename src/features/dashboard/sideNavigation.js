import React from "react";

const SideNavigation = ({ setSelected }) => {
    return (
        <>
            <aside className="w-96 min-h-screen bg-gray-50" aria-label="Sidebar">
                <div className="px-8 py-12 overflow-y-auto">
                    <ul className="space-y-3">
                        <li>
                            <a onClick={() => setSelected('dashboard')}
                               className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg
                                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                </svg>
                                <span className="ml-3">Dashboard</span>
                            </a>
                        </li>
                        {/*<li>*/}
                        {/*    <button type="button"*/}
                        {/*            className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"*/}
                        {/*            aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">*/}
                        {/*        <svg*/}
                        {/*            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"*/}
                        {/*            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*            <path fill-rule="evenodd"*/}
                        {/*                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"*/}
                        {/*                  clip-rule="evenodd"></path>*/}
                        {/*        </svg>*/}
                        {/*        <span className="flex-1 ml-3 text-left whitespace-nowrap"*/}
                        {/*              sidebar-toggle-item>E-commerce</span>*/}
                        {/*        <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"*/}
                        {/*             xmlns="http://www.w3.org/2000/svg">*/}
                        {/*            <path fill-rule="evenodd"*/}
                        {/*                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"*/}
                        {/*                  clip-rule="evenodd"></path>*/}
                        {/*        </svg>*/}
                        {/*    </button>*/}
                        {/*    <ul id="dropdown-example" className="hidden py-2 space-y-2">*/}
                        {/*        <li>*/}
                        {/*            <a href="#"*/}
                        {/*               className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Products</a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <a href="#"*/}
                        {/*               className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Billing</a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <a href="#"*/}
                        {/*               className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Invoice</a>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
                        <li>
                            <a onClick={() => setSelected('analysis')}
                               className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                    </path>
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Analysis History</span>
                                <span
                                    className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                            </a>
                        </li>
                        {/*<li>*/}
                        {/*    <a href="#"*/}
                        {/*       className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">*/}
                        {/*        <svg*/}
                        {/*            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"*/}
                        {/*            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*            <path*/}
                        {/*                d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">*/}
                        {/*            </path>*/}
                        {/*            <path*/}
                        {/*                d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">*/}
                        {/*            </path>*/}
                        {/*        </svg>*/}
                        {/*        <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>*/}
                        {/*        <span*/}
                        {/*            className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a href="#"*/}
                        {/*       className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">*/}
                        {/*        <svg*/}
                        {/*            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"*/}
                        {/*            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"*/}
                        {/*                  clip-rule="evenodd"></path>*/}
                        {/*        </svg>*/}
                        {/*        <span className="flex-1 ml-3 whitespace-nowrap">Users</span>*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a href="#"*/}
                        {/*       className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">*/}
                        {/*        <svg*/}
                        {/*            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"*/}
                        {/*            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*            <path fill-rule="evenodd"*/}
                        {/*                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"*/}
                        {/*                  clip-rule="evenodd"></path>*/}
                        {/*        </svg>*/}
                        {/*        <span className="flex-1 ml-3 whitespace-nowrap">Products</span>*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </aside>
        </>
    );
};
export default SideNavigation;