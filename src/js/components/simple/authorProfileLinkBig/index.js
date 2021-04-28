import React from 'react';
import Image from '../../so-simple/image';
import Text from '../../so-simple/text';
import './authorProfileLinkBig.css';

export default props => {
    // username
    // imageSrc
    // name
    return (
        <a {...props.propsLink}>
            <Image src={props.imageSrc} />
            <Text {...props.propsName} />
            <Text {...props.propsUsername} />
        </a>
    )
}
