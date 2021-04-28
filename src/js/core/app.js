import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import unsplash from '../lib/unsplashWrap.js';

import Auth from '../components/simple/auth';
import ShowBusy from '../components/so-simple/loading';
import Content from '../containers/content.js';

import separateProps from '../lib/separateProps.js';
import mapStateToProps from '../lib/mapStateToProps.js';
import mapDispatchToProps from '../lib/mapDispatchToProps.js';

let App = (props) => {
    const newProps = separateProps(props, unsplash);

    // второй шаг авторизации
    newProps.authSecond ? newProps.doContinueLogIn(newProps.propsLogIn) : null;

    return (
        <>
            {newProps.showAuth ?
                <Auth {...newProps.propsAuth} /> :
                newProps.isBusy ?
                    <ShowBusy {...newProps.showBusy} /> :
                    <Content {...newProps.propsContent} />
            }
        </>
    );
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default withRouter(props => <App {...props} />);
