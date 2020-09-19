import React from 'react';
import {Link} from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = ({authUser}) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNotAuth />}</div>  
);

const NavigationAuth = () => (
    <ul>
        <li><Link className="navlink" to={ROUTES.LANDING}>Landing</Link></li>
        <li><Link className="navlink" to={ROUTES.HOME}>Home</Link></li>
        <li><Link className="navlink" to={ROUTES.ACCOUNT}>Account</Link></li>
        <li><SignOutButton /></li>
    </ul>
);

const NavigationNotAuth = () => (
    <ul>
        <li><Link className="navlink" to={ROUTES.SIGN_IN}>Sign In</Link></li>
        <li><Link className="navlink" to={ROUTES.LANDING}>Landing</Link></li>
    </ul>
)

export default Navigation;