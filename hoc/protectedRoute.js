import React, { Component } from 'react';

import { meServer } from '../redux/actions/authActions';
import { redirectToHome } from '../utils/redirect';

const protectedRoute = (WrappedComponent) => class extends Component {
    static async getInitialProps({ store, res, req }) {
        await store.dispatch(meServer(req.headers.cookie));
        const auth = store.getState().auth;

        if(auth.isAuthenticated) redirectToHome(res);
    }

    render() {
        return <WrappedComponent {...this.props} />;
    }
}

export default protectedRoute;
