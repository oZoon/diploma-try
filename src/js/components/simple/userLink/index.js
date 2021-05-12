import React from 'react';
import { URL_USER } from '../../../lib/constants.js';
import { Link } from 'react-router-dom';
import './userLink.css';

// style
// link
// text
// number
export default props => {
    return (
        <span className="header-item">
            {
                props.number || props.style ?
                    <Link
                        to={URL_USER[props.link]}
                        className={props.style || 'header-item-link'}
                    >
                        {props.style ?
                            <svg viewBox="0 0 24 24" style={{ height: '36px' }}>
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                            </svg> :
                            null
                        }{props.text} {props.number ? `(${props.number})` : null}
                    </Link>
                    :
                    <span className="header-item-no-link">
                        {props.text}
                    </span>
            }
        </span>

    );
};
