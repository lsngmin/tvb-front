import { BrowserRouter as Router} from "react-router-dom";
import {AuthProvider} from "providers/authProvider";
import CustomRoutes from "routes/routes";
import "output.css";

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
