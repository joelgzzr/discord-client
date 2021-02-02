import React from 'react';

import protectedRoute from '../hoc/protectedRoute';
import LogInForm from '../components/authentication/LogInForm';
import GlobalStyle from '../components/styles/GlobalStyle';

const Index = () => {
  return (
    <>
      <LogInForm />
      <GlobalStyle />
    </>
  )
}

export default protectedRoute(Index);
