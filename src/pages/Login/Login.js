import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import MainText from "../../components/MainText/MainText";
import Introducing from "../../components/Introducing/Introducing";
import Footer from "../../components/Footer/Footer";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import './Login.css';
const providers = [
    { id: 'github', name: 'GitHub' },
    { id: 'google', name: 'Google' },
    { id: 'facebook', name: 'Facebook' },
    { id: 'twitter', name: 'Twitter' },
    { id: 'linkedin', name: 'LinkedIn' },
];

const signIn = async (provider) => {
    // preview-start
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Sign in with ${provider.id}`);
            resolve({ error: 'This is a fake error' });
        }, 500);
    });
    // preview-end
    return promise;
};

const Login = () => {
    const theme = useTheme();

    return (
        <div className="G12H62">
        <AppProvider theme={theme} >
            <div className="Z84S96">
            <SignInPage signIn={signIn} providers={providers} />
            </div>
        </AppProvider>
        </div>
    );
};

export default Login;