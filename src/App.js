import "./App.css";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import ForgotPassword from "./component/ForgotPassword";
import ResetPassword from "./component/ResetPassword";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/forgotpassword" exact component={ForgotPassword} />
        <Route path="/reset/:token" exact component={ResetPassword} />
      </Router>
    </div>
  );
}

export default App;
