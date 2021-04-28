import React from 'react';
import Button from '../../so-simple/button';
import Text from '../../so-simple/text';
import './auth.css';

export default props => {
    // console.log(s);
    return (
        <div className="auth">
            <div className="auth-modal">
                <div className="auth-container">
                    <Text {...props.propsText} />
                    <Button {...props.propsButton} />
                </div>
            </div>
        </div>
    );
};
