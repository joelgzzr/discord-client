import React from 'react';
import { createGlobalStyle } from 'styled-components';

import protectedRoute from '../hoc/protectedRoute';
import LogInForm from '../components/authentication/LogInForm'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0 !important;
        height: 100vh;
        width: 100vw;
    }

    #__next {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* @font-face {
        font-family: 'montserrat-bold';
        src: url('/fonts/Montserrat-Bold.otf');
    }

    @font-face {
        font-family: 'montserrat-medium';
        src: url('/fonts/Montserrat-Medium.otf');
    } */
`;

const Index = () => {
  return (
    <>
      <LogInForm />
      <GlobalStyle />
    </>
  )
}

export default protectedRoute(Index);
