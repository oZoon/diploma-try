import React from 'react';
import moment from 'moment-timezone';

import Text from '../../so-simple/text';
import './publicDateSmall.css';

export default props => {
    return (
        <Text className='date-small'>
            {moment(props.date).tz('Europe/Moscow').format('DD.MM.YYYY HH:mm')}{' '}
            MSK
        </Text>
    );
};
