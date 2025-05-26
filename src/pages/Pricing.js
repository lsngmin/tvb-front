import React from 'react';
import Navigation from '../features/navigation/navigation';

const Pricing = () => {
    return (
        <div className="pricing-page font-sans min-h-screen bg-white">
            <Navigation />
            <div className="flex flex-col items-center pt-4 w-full mt-8">
                <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
                    Pricing Plans
                </h2>
                <h5 className="font-medium text-gray-500 mb-6 text-base md:text-lg">
                    Choose the plan that fits your deepfake detection needs
                </h5>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 mt-8 dark:border-gray-800 dark:bg-white/[0.03] w-full max-w-xs sm:max-w-sm" style={{ boxSizing: 'border-box' }}>
                    <span className="block mb-3 font-semibold text-gray-800 text-xl dark:text-white/90">
                        Starter
                    </span>
                    <div className="flex items-center mb-1">
                        <h2 className="font-bold text-gray-800 text-2xl md:text-3xl dark:text-white/90">
                            $5.00
                        </h2>
                        <span className="inline-block mb-1 text-sm text-gray-500 dark:text-gray-400 ml-2">
                            /month
                        </span>
                    </div>
                    <div style={{ width: '100%', height: '1px', margin: '24px 0', background: 'rgba(0,0,0,0.09)' }}></div>
                    <ul className="mb-8 space-y-3">
                        <li className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="text-success-500"
                                 style={{ color: "#22c55e", minWidth: 20 }}>
                                <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657"
                                      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            5 website
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="text-success-500"
                                 style={{ color: "#22c55e", minWidth: 20 }}>
                                <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657"
                                      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            500 MB Storage
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="text-success-500"
                                 style={{ color: "#22c55e", minWidth: 20 }}>
                                <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657"
                                      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Unlimited Sub-Domain
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="text-success-500"
                                 style={{ color: "#22c55e", minWidth: 20 }}>
                                <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657"
                                      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            3 Custom Domain
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="text-success-500"
                                 style={{ color: "#22c55e", minWidth: 20 }}>
                                <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657"
                                      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Free SSL Certificate
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="text-success-500"
                                 style={{ color: "#22c55e", minWidth: 20 }}>
                                <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657"
                                      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Unlimited Traffic
                        </li>
                    </ul>
                    <button
                        className="flex w-full items-center justify-center rounded-lg bg-gray-800 p-3 text-base font-semibold text-white shadow-theme-xs transition-colors hover:bg-brand-500 dark:bg-white/10 dark:hover:bg-brand-600">
                        Choose Starter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
