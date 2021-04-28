import React from 'react';

import UserLink from '../../simple/userLink';
import Divider from '../../so-simple/divider'
import LogOut from '../../so-simple/logOut';
import './header.css';

export default props => {
    return (
        <nav className="header">
            <div className="container">
                <UserLink {...props.propsUserName} />
                <Divider />
                <UserLink {...props.propsUserPhotos} />
                <UserLink {...props.propsUserCollections} />
                <UserLink {...props.propsUserLiked} />
                <LogOut {...props.propsLogOut} />
            </div>
        </nav>
    );
};
