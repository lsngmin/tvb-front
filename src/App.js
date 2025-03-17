import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Navigation from "./components/Navigation/Navigation";
import MainText from "./components/MainText/MainText";
import CallToAction from "./components/CallToAction/CallToAction";
import Introducing from "./components/Introducing/Introducing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login"; // 초기 페이지



function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              {/*<Route path="/services" element={<Services />} />*/}
          </Routes>
      </Router>
  );
}

export default App;
