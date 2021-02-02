import React from 'react';

import privateRoute from '../hoc/privateRoute';

const Profile = () => {
    return (
        <div>
            This is the profile page!
        </div>
    )
}

export default privateRoute(Profile);
