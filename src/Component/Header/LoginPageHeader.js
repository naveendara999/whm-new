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
import { Link } from 'react-router-dom';


const LoginPageHeader = () => (
    <Header aria-label="Carbon Tutorial">
    <HeaderName element={Link} to="/" prefix="">
       <img src={Uvation_logo} /> Uvation UCS
    </HeaderName>
  </Header>
  );
export default LoginPageHeader
