import React from "react";
import './bigPhoto.css';

export default props => {
    return (
        <img
            src={props.src}
            className="big-image"
            style={{ 'width': `${props.size[0]}px`, 'height': `${props.size[1]}px`}}
            // width={`${props.size[0]}`}
            // height={`${props.size[1]}`}
        />
    )
}
