import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login"; // 초기 페이지
import Support from "./pages/Support/Support";
import Contact from "./pages/Contact/Contact";
import Pricing from "./pages/Pricing/Pricing";
import Signup from "./pages/Signup/Signup";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/support" element={<Support/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
                {/*<Route path="/services" element={<Services />} />*/}
            </Routes>
        </Router>
    );
}
export default App;
