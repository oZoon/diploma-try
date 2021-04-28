import React from 'react';
import { Link } from 'react-router-dom';
import { PHOTO_WIDTH, URL_USER } from '../../../lib/constants.js';

import AuthorProfileLink from '../authorProfileLinkSmall';
import LikeData from '../likeDataSmall';
import PublicDate from '../publicDateSmall';

import './photo.css';

export default props => {
    return (
        <div className="content-card">
            <Link
                to={`${URL_USER.photo}/${props.id}`}
            >
                <img
                    src={props.urls.small}
                    className="image-card"
                    height={PHOTO_WIDTH * props.height / props.width}
                    width={PHOTO_WIDTH}
                    style={{ 'backgroundColor': `${props.color}` }}
                />
                <span className="opacity-layer-card">
                    <LikeData
                        count={props.likes}
                        color={props.likedPhotosId.includes(props.id) ? 'red' : 'black'}
                    />
                    <PublicDate date={props.updated_at} />
                </span>
            </Link>
            <AuthorProfileLink
                username={props.user.username}
                imageSrc={props.user.profile_image.small}
                name={props.user.name}
            />
        </div>
    )
}
