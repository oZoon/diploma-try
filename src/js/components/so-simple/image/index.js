import React from 'react';
import './image.css';

// src
// className
export default props => (
    <img src={props.src} className={props.className || 'avatar'} />
);
