import React from 'react';
import LoadingBig from '../../../../images/loading3.gif';
import LoadingSmall from '../../../../images/loading.gif';
import './loading.css';

export default props => {
    const loading = props.size == 'small' ? LoadingSmall : LoadingBig;
    return <span className="loading-wrap"><img src={loading} className={props.className} /></span>;
};
