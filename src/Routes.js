import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Main from "./pages/Main/Main";
// import Login from "./pages/Login/Login"; // 초기 페이지
import Login from "./pages/Login/NewLogin"; // 초기 페이지

import Support from "./pages/Support/Support";
import Contact from "./pages/Contact/Contact";
import Pricing from "./pages/Pricing/Pricing";
import Signup from "./pages/Signup/Signup";
import FreeTrial from "./pages/FreeTrial/FreeTrial";
import {AuthProvider} from "./components/Api/Auth/AuthProvider";
import OAuthRedirectPage from "./pages/Auth/Auth";
import Issue from "./pages/Issue/Issue";
import Page_404 from "./pages/ErrorPage/CustomErrorPage";
import CustomErrorPage from "./pages/ErrorPage/CustomErrorPage";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <motion.div
                            // initial={{ opacity: 0, y: 20 }}
                            // animate={{ opacity: 1, y: 0 }}
                            // exit={{ opacity: 0, y: -20 }}
                            // transition={{ duration: 0.3 }}
                        >
                            <Main />
                        </motion.div>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Login />
                        </motion.div>
                    }
                />
                <Route
                    path='/free-trial'
                    element={
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <FreeTrial />
                        </motion.div>
                    }
                    />
                <Route
                    path="/signup"
                    element={
                        <Signup />

                    }
                    />
                    <Route
                        path="/issue"
                        element={
                            <motion.div
                                // initial={{ opacity: 0, y: 20 }}
                                // animate={{ opacity: 1, y: 0 }}
                                // exit={{ opacity: 0, y: -20 }}
                                // transition={{ duration: 0.3 }}
                            >
                                <Issue />
                            </motion.div>
                        }
                    />
                <Route
                    path="/*"
                    element={
                        <motion.div
                            // initial={{ opacity: 0, y: 20 }}
                            // animate={{ opacity: 1, y: 0 }}
                            // exit={{ opacity: 0, y: -20 }}
                            // transition={{ duration: 0.3 }}
                        >
                            <CustomErrorPage status={"404"} />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
