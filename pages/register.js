import React from 'react';

import protectedRoute from '../hoc/protectedRoute';
import RegisterForm from '../components/authentication/RegisterForm';
import GlobalStyle from '../components/styles/GlobalStyle';

const Register = () => {
    return (
        <>
            <RegisterForm />
            <GlobalStyle />
        </>
    )
}

export default protectedRoute(Register)

