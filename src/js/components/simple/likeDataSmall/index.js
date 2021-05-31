import React from 'react';

import IconLike from '../../so-simple/iconLike';
import Text from '../../so-simple/text';

import './likeDataSmall.css';

export default props => {
    return (
        <Text
            className='like'
            style={
                props.pubs == 'liked'
                    ? { color: 'red', fontWeight: 'bold' }
                    : {}
            }
        >
            {props.pubs == 'home' ? <IconLike color={props.color} /> : null}
            {props.count}
        </Text>
    );
};
