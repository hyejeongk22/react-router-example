import React from "react";
import Home from "./pages/Home"; //확장자없이 적기
import Profile from "./pages/Profile";
import About from "./pages/About";
import Login from "./pages/Login";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import queryString from "query-string";
import "./App.css";

const activeStyle = {
  color: "green"
};

let isLogin = false;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <NavLink exact activeStyle={activeStyle} to="/">
              /
            </NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={activeStyle} to="/profile">
              /profile
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/profile/1">
              /profile/1
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={activeStyle}
              to="/about"
              isActive={(match, location) => {
                console.log(match, location);
                if (location.pathname !== "/about") return false;
                const query = queryString.parse(location.search);
                return query.name === undefined;
              }}
            >
              /about
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={activeStyle}
              to="/about?name=jeong"
              isActive={(match, location) => {
                console.log(match, location);
                if (location.pathname !== "/about") return false;
                const query = queryString.parse(location.search);
                return query.name !== undefined;
              }}
            >
              /about?name=jeong
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/login">
              login
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/profile/:id" component={Profile} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route
            path="/login"
            render={() => {
              if (isLogin) {
                return <Redirect to="/" />;
              }
              return <Login />;
            }}
          />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
