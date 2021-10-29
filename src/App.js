import "./App.css";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
      </Router>
    </div>
  );
}

export default App;
