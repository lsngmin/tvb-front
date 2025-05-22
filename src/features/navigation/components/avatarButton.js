import React, { useState, useRef, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {useAuth} from "providers/authProvider";
import {useNavigate} from "react-router-dom";
export default function AvatarButton({ avatar }) {
    const { accessToken, logout } = useAuth();

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/profile");
    };
    return (
        <>
            <Menu as="div" className="relative ">
                <div>
                    <MenuButton>
                        <img
                            src={avatar}
                            alt="Avatar"
                            className="inline-block size-9 rounded-lg"
                        />
                    </MenuButton>
                </div>

                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-52 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <div className="py-1">
                        <MenuItem>
                            <a
                                onClick={handleClick}
                                className="cursor-pointer flex items-center gap-2 block px-4 py-2 text-sm font-mono text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                            >
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 14C16.2164 12.8589 14.981 12 13.5 12C12.019 12 10.7836 12.8589 10.5 14M13.5 8H13.51M18 21H10.2C7.67976 21 6.41965 21 5.45704 20.5095C4.61031 20.0781 3.9219 19.3897 3.49047 18.543C3 17.5804 3 16.3202 3 13.8V6M9.2 18H17.8C18.9201 18 19.4802 18 19.908 17.782C20.2843 17.5903 20.5903 17.2843 20.782 16.908C21 16.4802 21 15.9201 21 14.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V14.8C6 15.9201 6 16.4802 6.21799 16.908C6.40973 17.2843 6.71569 17.5903 7.09202 17.782C7.51984 18 8.0799 18 9.2 18ZM14.5 8C14.5 8.55228 14.0523 9 13.5 9C12.9477 9 12.5 8.55228 12.5 8C12.5 7.44772 12.9477 7 13.5 7C14.0523 7 14.5 7.44772 14.5 8Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Your profile
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="#"
                                className="flex items-center gap-2 block px-4 py-2 text-sm font-mono text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                            >
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 16.9999H15M3 14.5999V12.1301C3 10.9814 3 10.407 3.14805 9.87807C3.2792 9.40953 3.49473 8.96886 3.78405 8.57768C4.11067 8.13608 4.56404 7.78346 5.47078 7.07822L8.07078 5.056C9.47608 3.96298 10.1787 3.41648 10.9546 3.2064C11.6392 3.02104 12.3608 3.02104 13.0454 3.2064C13.8213 3.41648 14.5239 3.96299 15.9292 5.056L18.5292 7.07822C19.436 7.78346 19.8893 8.13608 20.2159 8.57768C20.5053 8.96886 20.7208 9.40953 20.8519 9.87807C21 10.407 21 10.9814 21 12.1301V14.5999C21 16.8401 21 17.9603 20.564 18.8159C20.1805 19.5685 19.5686 20.1805 18.816 20.564C17.9603 20.9999 16.8402 20.9999 14.6 20.9999H9.4C7.15979 20.9999 6.03969 20.9999 5.18404 20.564C4.43139 20.1805 3.81947 19.5685 3.43597 18.8159C3 17.9603 3 16.8401 3 14.5999Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Your dashboard
                            </a>
                        </MenuItem>
                    </div>

                    <div className="py-1">
                        <MenuItem>
                            <a
                                onClick={logout}
                                className="cursor-pointer flex items-center gap-2 block px-4 py-2 text-sm font-mono text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                            >
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.9995 15.9995L20.9995 11.9995M20.9995 11.9995L16.9995 7.99951M20.9995 11.9995H8.99951M12.9995 20.9995H6.20029C5.08019 20.9995 4.52014 20.9995 4.09231 20.7815C3.71599 20.5898 3.41003 20.2838 3.21828 19.9075C3.00029 19.4797 3.00029 18.9196 3.00029 17.7995V6.19951C3.00029 5.07941 3.00029 4.51935 3.21828 4.09153C3.41003 3.71521 3.71599 3.40925 4.09231 3.2175C4.52014 2.99951 5.08019 2.99951 6.20029 2.99951L12.9995 2.99951" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Sign out
                            </a>
                        </MenuItem>
                    </div>
                </MenuItems>
            </Menu>
        </>
    );
}
