import React from 'react';
import "./Navigation.css"
import {Divider, Box, Button} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useNavigate, Link} from "react-router-dom";
import {useAuth} from "../Api/Auth/AuthProvider";
import { useState, useEffect } from 'react';
import Logo from "../../logo.svg";
import "../../output.css";

const Navigation = () => {
    const { userInfo, logout, loading} = useAuth();
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (userInfo) {
            alert(`환영합니다. ${userInfo.userId}`);
            setClicked(true);
        }
    };

    return (
        <header className="absolute inset-x-0 top-0 z-50 bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex items-center gap-x-12">
                    <a href={process.env.REACT_APP_URL_FRONT} className="-m-1.5 p-1.5">
                        <img className="h-8 w-auto" src={Logo} alt="truebox"/>
                    </a>
                </div>
                <div className="hidden items-center lg:flex lg:gap-x-12">
                    <Link className="text-sm font-semibold leading-6" to="/">Features</Link>
                    <Link className="text-sm font-semibold leading-6" to="/free-trial">Free Trial</Link>
                    <Link className="text-sm font-semibold leading-6" to="/pricing">Pricing</Link>
                    <Link className="text-sm font-semibold leading-6" to="/api-docs">API Docs</Link>
                    <Link className="text-sm font-semibold leading-6" to="/support">Support</Link>
                    {/*<Link className="justify-between rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-cyan-500 focus-visible:outline text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" to="/login">SignUp</Link>*/}
                </div>
                <div className="justify-between  items-center gap-x-0">
                    {userInfo ? (

                        <div className="items-center lg:flex lg:gap-x-10">
                            <Link className=" rounded-md border-black border-2 px-3.5 py-3 text-sm font-semibold shadow-sm
                            focus-visible:outline  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                  onClick={handleClick}>
                                MyInfo
                            </Link>
                            <Link className=" rounded-md border-black border-2 px-3.5 py-3 text-sm font-semibold shadow-sm
                            focus-visible:outline  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                  onClick={logout}>
                                LogOut
                            </Link>
                        </div>
                        ) : (
                        <div className="items-center lg:flex lg:gap-x-3">
                        <Link className=" rounded-md border-black border-2 px-3.5 py-3 text-sm font-semibold shadow-sm  focus-visible:outline  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" to="/login">GetStarted</Link>
                        </div>
                            )}
                    </div>
                {/*<ul className="navbar-items">*/}
                {/*    <li><Link className="F14W46" to="/">Features</Link></li>*/}
                {/*    <li><Link className="F14W46" to="/free-trial">Free Trial</Link></li>*/}
                {/*    <li><Link className="F14W46" to="/pricing">Pricing</Link></li>*/}
                {/*    <li><Link className="F14W46" to="/api-docs">API Docs</Link></li>*/}
                {/*    <li><Link className="F14W46" to="/support">Support</Link></li>*/}
                {/*    <Box display="flex" alignItems="center" height="20px">*/}
                {/*        <Divider orientation="vertical" flexItem*/}
                {/*                 sx={{borderColor: 'gray', marginLeft: '3px', border: '1px solid gray'}}/>*/}
                {/*    </Box>*/}
                {/*    <li>*/}
                {/*        {userInfo ? (*/}
                {/*            <Button onClick={handleClick}*/}
                {/*                    className="login-button"*/}
                {/*                    variant="contained"*/}
                {/*                    color="primary"*/}
                {/*                    startIcon={<AccountCircleIcon sx={{ fontSize: '1rem' }} />}*/}
                {/*                    sx={{*/}
                {/*                        backgroundColor: '#000000',*/}
                {/*                        color: 'white',*/}
                {/*                        '&:hover': {*/}
                {/*                            backgroundColor: '#222222',*/}
                {/*                        },*/}
                {/*                        padding: '4px 8px',*/}
                {/*                        marginLeft: '15px',*/}
                {/*                        borderRadius: '3px',*/}
                {/*                        marginRight: '8px',*/}
                {/*                        fontSize: '0.75rem',*/}
                {/*                        minWidth: 'auto',*/}
                {/*                    }}*/}
                {/*            >*/}
                {/*                INFO*/}
                {/*            </Button>*/}
                {/*        ) : (*/}
                {/*            <Button onClick={navigateLogin}*/}
                {/*                    className="login-button"*/}
                {/*                    variant="contained"*/}
                {/*                    color="primary"*/}
                {/*                    startIcon={<AccountCircleIcon sx={{ fontSize: '1rem' }} />}*/}
                {/*                    sx={{*/}
                {/*                        backgroundColor: '#000000',*/}
                {/*                        color: 'white',*/}
                {/*                        '&:hover': {*/}
                {/*                            backgroundColor: '#222222',*/}
                {/*                        },*/}
                {/*                        padding: '4px 8px',*/}
                {/*                        marginLeft: '15px',*/}
                {/*                        borderRadius: '3px',*/}
                {/*                        marginRight: '8px',*/}
                {/*                        fontSize: '0.75rem',*/}
                {/*                        minWidth: 'auto',*/}
                {/*                    }}*/}
                {/*            >*/}
                {/*                Login*/}
                {/*            </Button>*/}
                {/*        )}*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </nav>
        </header>
    );
}

export default Navigation;