import React from 'react';

import withAuthorization from '../Session/withAuthorization';

const HomePage=()=>(
    <div>
    <h1>Home page</h1>
    <h3>The home page is accessible by every signed in user.</h3>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);