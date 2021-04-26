import React from "react";
import Photo from 'simple/photo';
import './feed.css';

export default props => {
    return (
        <div className="content-column">
            {
                props.photosList.map(item => {
                return (
                    <Photo
                        key={item.id}
                        {...item}
                        likedPhotosId={props.likedPhotosId}
                    />
                )
            })}
        </div>
    )
}
