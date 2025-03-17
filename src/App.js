import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login"; // 초기 페이지
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
