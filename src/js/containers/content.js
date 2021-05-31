import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { URL_USER } from '../lib/constants';

import Header from '../components/complex/header';
import Home from '../components/complex/home';
import SelectedPhoto from '../components/complex/selectedPhoto';
import Liked from '../components/complex/liked';
import ShowBusy from '../components/so-simple/loading';

import './content.css';

export default props => {
    return (
        <div className='content'>
            <Header {...props.header} />
            <Switch>
                <Route
                    exact
                    path={URL_USER.home}
                    render={() => <Home {...props.home} />}
                />
                <Route
                    path={`${URL_USER.photo}/`}
                    render={() => <SelectedPhoto {...props.selectedPhoto} />}
                />
                <Route
                    path={`${URL_USER.liked}/`}
                    render={() => <Liked {...props.liked} />}
                />
            </Switch>
            {props.isBusy ? <ShowBusy {...props.showBusy} /> : null}
        </div>
    );
};
