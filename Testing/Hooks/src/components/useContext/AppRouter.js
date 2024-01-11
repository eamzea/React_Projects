import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AboutScreen from "./AboutScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Container fluid>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/about" component={AboutScreen} />
            <Route path="/login" component={LoginScreen} />
            <Redirect to="/" />
          </Switch>
        </Container>
      </div>
    </Router>
  );
};
