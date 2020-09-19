import React from 'react';

import withAuthorization from '../Session/withAuthorization';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
    <div>
        <h1>Account Page</h1>
        <PasswordChangeForm />
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);