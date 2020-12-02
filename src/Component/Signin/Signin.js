import React from "react";
import { Button, Checkbox, TextInput } from "carbon-components-react";
import { LockAlt } from "@carbon/pictograms-react";
import { Link } from "react-router-dom";
import { ArrowLeft16, ArrowRight16 } from "@carbon/icons-react";
import LoginPageHeader from "../Header/LoginPageHeader";

const Signin = () => {
  return (
    <div className="signin">
      <LoginPageHeader />
      <div className="bx--grid-full-width">
        <div className="bx--row ">
          <div className="bx--col-lg-4 bx--offset-lg-1 formside ">
            <div className="bx--grid">
              <div className="bx--col-lg-14 ">
                <div className="lock">
                  <LockAlt />
                </div>

                <div className="title">
                  <h4>Log in to Uvation Identity</h4>
                </div>

                <div className="sub-title">
                  <p>
                    Don't have an account?
                    <Link to="/signup"> Create an account</Link>
                  </p>
                </div>

                <div className="form-title">
                  <h5>Login with your Uvation ID</h5>
                </div>
                <div className="input-label">
                  <p>
                    Enter your ID | <Link to="">Forgot ID?</Link>
                  </p>
                  <div>
                    <TextInput
                      labelText=""
                      id="test2"
                      invalidText="A valid value is required"
                      placeholder="address@email.com"
                    />
                  </div>
                  <div className="input-label pass">
                    <p>
                      Enter your password | <Link to="">Forgot password?</Link>
                    </p>
                    <div>
                      <TextInput.PasswordInput
                        labelText=""
                        hidePasswordLabel="Hide password"
                        id="test3"
                        invalidText="A valid value is required"
                        placeholder="***********"
                        showPasswordLabel="Show password"
                      />
                    </div>
                  </div>
                  <div className="login-btn">
                    <Button renderIcon={ArrowRight16}>Login</Button>
                  </div>
                  <fieldset className="check-box">
                    <Checkbox labelText="Remember me" id="checked-2" />
                  </fieldset>
                </div>
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

export default Signin;
