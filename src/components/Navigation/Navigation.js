import React from 'react';
import "./Navigation.css"
import {Divider, Box, Button, IconButton} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Separator } from '@base-ui-components/react/separator';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import {useNavigate, Link} from "react-router-dom";
import {useAuth} from "../Api/Auth/AuthProvider";
import { createContext, useState, useContext, useEffect } from 'react';


const Navigation = () => {
    const navigate = useNavigate();
    const { userInfo } = useAuth();
    const [clicked, setClicked] = useState(false);


    useEffect(() => {
        if (clicked) {
            console.log('Welcome message clicked');
        }
    }, [clicked]);

    const navigateLogin = () => {
        navigate('/login');
    }

    const navigateSignUp = () => {
        navigate('/signup');
    }

    const handleClick = () => {
        if (userInfo) {
            alert(`환영합니다. ${userInfo.userId}`);
            setClicked(true);  // 클릭한 상태로 변경
        }
    };


    return (
        <div className="S08R16">
            <nav className="L81Z53">
                <ul className="navbar-items">
                    <li><Link className="F14W46" to="/">Features</Link></li>
                    <li><Link className="F14W46" to="/about">Free Trial</Link></li>
                    <li><Link className="F14W46" to="/pricing">Pricing</Link></li>
                    <li><Link className="F14W46" to="/api-docs">API Docs</Link></li>
                    <li><Link className="F14W46" to="/support">Support</Link></li>
                    <Box display="flex" alignItems="center" height="25px">
                        <Divider orientation="vertical" flexItem
                                 sx={{borderColor: 'gray', marginLeft: '3px', border: '1px solid gray'}}/>
                    </Box>
                    <li>
                        {userInfo ? (
                                <Button onClick={handleClick}
                                        className="login-button"
                                        variant="contained"
                                        color="primary"
                                        startIcon={<AccountCircleIcon />}
                                        sx={{
                                            backgroundColor: '#4d0b8c',
                                            color: 'gray',
                                            '&:hover': {
                                                backgroundColor: '#3700b3',
                                            },
                                            padding: '10px 20px',
                                            marginLeft: '30px',
                                            borderRadius: '5px',
                                            marginRight: '10px',
                                        }}
                                >
                                    INFO
                                </Button>
                            ) : (
                                <Button onClick={navigateLogin}
                                        className="login-button"
                                        variant="contained"
                                        color="primary"
                                        startIcon={<AccountCircleIcon />}
                                        sx={{
                                            backgroundColor: '#4d0b8c',
                                            color: 'gray',
                                            '&:hover': {
                                                backgroundColor: '#3700b3',
                                            },
                                            padding: '10px 20px',
                                            marginLeft: '30px',
                                            borderRadius: '5px',
                                            marginRight: '10px',
                                        }}
                                >
                                    Login
                                </Button>
                            )}

                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;