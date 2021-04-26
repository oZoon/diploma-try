import React from "react";
import moment from 'moment-timezone';

import Text from 'so-simple/text';
import './publicDateBig.css';

export default props => {
    return (
        <Text className="date-big">
            {moment(props.date).tz("Europe/Moscow").format('DD.MM.YYYY HH:mm')} MSK
        </Text>
    )
}
