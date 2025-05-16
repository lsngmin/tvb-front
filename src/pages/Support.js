import React from 'react';
import {
    Help as HelpIcon,
    Security as SecurityIcon,
    Speed as SpeedIcon,
    Payment as PaymentIcon,
    SupportAgent as SupportAgentIcon
} from '@mui/icons-material';

import Navigation from '../features/navigation/navigation';

const supportItems = [
    {
        icon: <HelpIcon className="text-indigo-600 w-6 h-6" />,
        title: 'What is Deepfake?',
        description: 'Deepfake is an AI technique that creates or manipulates media to appear real. Our platform helps you detect such content with confidence.',
    },
    {
        icon: <SecurityIcon className="text-indigo-600 w-6 h-6" />,
        title: 'How accurate is the detection?',
        description: 'Our AI-powered system achieves over 99% accuracy and is constantly updated to detect the latest deepfake technologies.',
    },
    {
        icon: <SpeedIcon className="text-indigo-600 w-6 h-6" />,
        title: 'How long does analysis take?',
        description: 'Most analyses complete within seconds. Larger video files may take a few minutes depending on file complexity.',
    },
    {
        icon: <PaymentIcon className="text-indigo-600 w-6 h-6" />,
        title: 'What are the pricing options?',
        description: 'Our pricing starts at $29/month, with flexible plans for individuals, teams, and enterprises.',
    },
    {
        icon: <SupportAgentIcon className="text-indigo-600 w-6 h-6" />,
        title: 'How can I get support?',
        description: 'We offer 24/7 support via email, chat, and phone. Our team typically responds within 24 hours.',
    },
];

export default function Support() {
    return (
        <>
            {/* ✅ Navigation은 고정 아님 – Main 페이지 방식으로 처리 */}
            <Navigation />

            <div className="bg-white relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
                {/* 배경 장식 */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

                {/* 제목 */}
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                        How can we help you?
                    </h1>
                    <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
                        Find answers to the most frequently asked questions about our deepfake detection service.
                    </p>
                </div>

                {/* FAQ 카드 */}
                <div className="mt-20 mx-auto max-w-6xl flex flex-wrap gap-x-10 gap-y-16 justify-center">
                    {supportItems.map((item, index) => (
                        <div
                            key={index}
                            className="w-full md:w-[calc(50%-1.25rem)] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 hover:bg-indigo-50/20"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 shadow-sm">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-md sm:text-lg text-slate-600/90 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
