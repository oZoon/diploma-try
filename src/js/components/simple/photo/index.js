import React from "react";
import { Link } from "react-router-dom";
import { PHOTO_WIDTH, URL_USER } from 'lib/constants';

import AuthorProfileLink from 'simple/authorProfileLinkSmall';
import LikeData from 'simple/likeDataSmall';
import PublicDate from 'simple/publicDateSmall';

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
