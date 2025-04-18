import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import CustomRoutes from "./Routes";
import "./output.css";
function App() {
    return (
        <AuthProvider>
            <Router>
                <CustomRoutes/>
            </Router>
        </AuthProvider>
    );
}
export default App;
