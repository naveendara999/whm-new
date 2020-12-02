
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPageHeader from "./Component/Header/LoginPageHeader";
import Signin from "./Component/Signin/Signin";
import Signup from "./Component/Signup/Signup";
import "./App.scss";

function App () {
  return(
  <>
    <LoginPageHeader />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  </>
)}

export default App;

