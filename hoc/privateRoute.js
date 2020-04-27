import React, { Component } from 'react';

import { meServer } from '../redux/actions/authActions';
import { redirectToLogin } from '../utils/redirect';

const privateRoute = (WrappedComponent) => class extends Component {
    static async getInitialProps({ store, res, req }) {
        await store.dispatch(meServer(req.headers.cookie));
        const auth = store.getState().auth;

        if(!auth.isAuthenticated) redirectToLogin(res);
    }

    render() {
        return <WrappedComponent {...this.props} />;
    }
}

export default privateRoute;
