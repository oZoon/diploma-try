import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import unsplash from '../lib/unsplashWrap';

import Auth from '../components/simple/auth';
import ShowBusy from '../components/so-simple/loading';
import Content from '../containers/content';

import separateProps from '../lib/separateProps';
import mapStateToProps from '../lib/mapStateToProps';
import mapDispatchToProps from '../lib/mapDispatchToProps';

let App = props => {
    const newProps = separateProps(props, unsplash);

    // второй шаг авторизации
    newProps.authSecond ? newProps.doContinueLogIn(newProps.propsLogIn) : null;

    return (
        <>
            {newProps.showAuth ? (
                newProps.isBusy ? (
                    <ShowBusy {...newProps.showBusy} />
                ) : (
                    <Auth {...newProps.propsAuth} />
                )
            ) : (
                <Content {...newProps.propsContent} />
            )}
        </>
    );
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default withRouter(props => <App {...props} />);
