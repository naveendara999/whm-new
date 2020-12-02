import React from 'react'
import {
    Header,
    HeaderName,
    HeaderNavigation,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
  } from 'carbon-components-react/lib/components/UIShell';
  import Uvation_logo from "../../assets/images/Uvation_logo.png";
import { Link } from 'react-router-dom';


const LoginPageHeader = () => (
  <Header aria-label="Carbon Tutorial">
    <HeaderName prefix="">
      <img src={Uvation_logo} /> Uvation UCS
    </HeaderName>
  </Header>
);
export default LoginPageHeader
