import "./App.css";

// React router dom
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

// VIEWS
import Signup from "./views/Signup";
import Login from "./views/Login";
import Admin from "./views/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/" style={{ margin: "20px" }}>
                SignUp
              </Link>
              <Link to="/login" style={{ margin: "20px" }}>
                Login
              </Link>
              <Link to="/admin" style={{ margin: "20px" }}>
                Admin
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
