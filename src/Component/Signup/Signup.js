import React from "react";

import { Button } from "carbon-components-react";

import { ArrowLeft16, ArrowRight16 } from "@carbon/icons-react";

import Forms from "./Forms";
import LoginPageHeader from "../Header/LoginPageHeader";

const Signup = () => {
  return (
    <div className="signup--page">
      <LoginPageHeader />
      <div className="bx--grid-full-width">
        <div className="bx--row ">
          <div className="bx--col-lg-4 bx--offset-lg-1 formside ">
            <div className="bx--grid login--formpage">
              <div className="">
                <Forms />
              </div>
            </div>
          </div>
          <div className="bx--col bx--no-gutter bg">
            <div className="bx--grid banner">
              <div className="bx--col-lg-12 ">
                <div className="signin-banner ">
                  <div className="heading">
                    <h1>Welcome to Uvation Identity Portal</h1>
                  </div>
                  <div className="bx--col-lg-13 bx--no-gutter sub-heading">
                    <h5>
                      Sign up and start using and managing all of our products
                      and services from one, centralized, spot
                    </h5>
                  </div>
                  <div className="bx--col bx--no-gutter about">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum eu magna mi.
                    </p>
                  </div>
                  <div className="slider-btn">
                    <div className="active"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </div>
                <div className="arow-btn">
                  <Button size="field">
                    <div className="arows">
                      <ArrowLeft16 />
                    </div>
                  </Button>
                  <Button size="field">
                    <div className="arows">
                      <ArrowRight16 />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
