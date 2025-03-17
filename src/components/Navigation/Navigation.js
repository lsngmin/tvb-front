import React from 'react';
import "./Navigation.css"
import {Divider, Box, Button, IconButton} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Separator } from '@base-ui-components/react/separator';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import {useNavigate} from "react-router-dom";



const Navigation = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    return (
        <div className="S08R16">
            <nav className="L81Z53">
                <ul className="navbar-items">
                    <li><a className="F14W46" href="/">Features</a></li>
                    <li><a className="F14W46" href="/about">Free Trial</a></li>
                    <li><a className="F14W46" href="/services">Pricing</a></li>
                    <li><a className="F14W46" href="/contact">API Docs</a></li>
                    <li><a className="F14W46" href="/contact">Support</a></li>
                    <Box display="flex" alignItems="center" height="25px">
                    <Divider orientation="vertical" flexItem
                    sx={{borderColor: 'gray', marginLeft: '3px', border: '1px solid gray'}}/>
                    </Box>
                    <li>
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
                    </li>
                    <li><button onClick={navigateLogin}>dqwdq</button></li>
                    {/*li><*/}
                    {/*    <IconButton aria-label={'no notifications'}>*/}
                    {/*        <Badge badgeContent={100} color="primary">*/}
                    {/*            <MailIcon />*/}
                    {/*        </Badge>*/}
                    {/*    </IconButton>*/}
                    {/*</li>*/}
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;