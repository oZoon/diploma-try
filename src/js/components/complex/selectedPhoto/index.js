import React from 'react';

import PhotoBig from '../../so-simple/photoBig';
import AuthorProfileLink from '../../simple/authorProfileLinkBig';
import PublicDate from '../../simple/publicDateBig';
import LikeData from '../../simple/likeDataBig';
import BtnGoBack from '../../so-simple/button';

import './detailPhoto.css';

export default props => {
    return (
        <div className="content-detail-photo">
            <PhotoBig {...props.photoBig} />
            <AuthorProfileLink {...props.authorProfileLinkBig} />
            <PublicDate {...props.publicDateBig} />
            <LikeData {...props.likeDataBig} />
            <BtnGoBack {...props.btnGoBack} />
        </div>
    )
}
