import React from 'react';
import './button.css';

export default (props) => {
    const data = props.data ? props.data : null;
    return (
        <button
            style={props.styleComponent || null}
            className={props.className || 'button'}
            onClick={() => props.onClick(data)}
            ref={props.propsRef ? props.propsRef : null}
        >
            {props.children}
        </button>)
};
