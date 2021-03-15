import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, Button } from "@material-ui/core";
import theme from "./themeConfig";
import React, { Suspense } from "react";
import Login from "./pages/login/login3";
import Home from "./pages/home/home";
import {UserContextProvider} from "./context/UserContext";
import { ExercicesContextProvider } from "./context/ExercicesContext";
import { ProfileContextProvider } from "./context/ProfileContext";


// import { Link, Route, Switch } from "wouter"; //alternativa a router-dom

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/header/header";

const HomePage = React.lazy(() => import("./pages/home/home"));
const Exercices = React.lazy(() => import("./pages/exercices/exercices"));
const Profile = React.lazy(() => import("./pages/profile/profile"));

function App() {
  console.log("app");
  return (
    <UserContextProvider>
        <ThemeProvider theme={theme}>
        <Suspense fallback={null}>
          <Header></Header>
          <ExercicesContextProvider>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={HomePage}></Route>
            <Route path="/exercices" component={Exercices}></Route>
            <ProfileContextProvider>
              <Route path="/@:username" component={Profile}></Route>
            </ProfileContextProvider>
          </ExercicesContextProvider>
        </Suspense>
        </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;
