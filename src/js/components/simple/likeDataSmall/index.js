import React from 'react';

import IconLike from '../../so-simple/iconLike';
import Text from '../../so-simple/text';

import './likeDataSmall.css';

export default props => {
    return (
        <Text className="like">
            <IconLike color={props.color} />
            {props.count}
        </Text>
    )
}
