import React from 'react';

import IconLike from '../../so-simple/iconLike';
import Text from '../../so-simple/text';
import ButtonLike from '../../so-simple/button';

import './likeDataBig.css';

export default props => {
    return (
        <ButtonLike {...props.propsLike}>
            <Text className={`like-big-${props.color}`}>
                <IconLike color={props.color} />
                {props.count}
            </Text>
        </ButtonLike>
    );
};
