import React from 'react';
import Image from '../../so-simple/image';
import Text from '../../so-simple/text';
import './authorProfileLinkSmall.css';

export default props => {
    // username
    // imageSrc
    // name
    return (
        <a
            className="link-unsplash"
            href={`https://unsplash.com/@${props.username}`}
            target="_blank"
        >
            <Image src={props.imageSrc} />
            <Text className="link-container">
                <Text className="link-name">
                    {props.name}
                </Text>
                <Text className="link-username">
                    @{props.username}
                </Text>
            </Text>
        </a>
    )
}
