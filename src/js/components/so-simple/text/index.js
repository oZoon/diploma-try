import React from 'react';
import './text.css';

export default props => {
    // content
    // children
    return <span className={props.className || 'text'}>{props.children}</span>;
};
