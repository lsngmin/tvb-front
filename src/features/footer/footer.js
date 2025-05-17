import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleContactClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <section className="bg-white">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="px-5 py-2">
                        <a href="#" className="text-sm leading-6 text-gray-500 hover:text-gray-900">
                            About
                        </a>
                    </div>

                    <div className="px-5 py-2">
                        <a href="#" className="text-sm leading-6 text-gray-500 hover:text-gray-900">
                            Contact
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-sm leading-6 text-gray-500 hover:text-gray-900">
                            Terms
                        </a>
                    </div>
                </nav>
                <p className="mt-8 text-xs leading-6 text-center text-gray-400">
                    © 2025 Gravifox Project. All rights reserved.
                </p>
            </div>
        </section>
    );
};
export default Footer;
