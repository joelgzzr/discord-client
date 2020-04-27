import React from 'react';
import privateRoute from '../hoc/privateRoute'

const Home = () => {
    return (
        <div>
            Hello you are logged in!
        </div>
    )
}

export default privateRoute(Home);
