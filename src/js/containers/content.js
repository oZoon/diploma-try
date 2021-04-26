import React from "react";
import { Route, Switch } from 'react-router-dom';
import { URL_USER } from 'lib/constants';

import Header from 'complex/header';
import Home from 'complex/home';
import SelectedPhoto from 'complex/selectedPhoto';
import ShowBusy from 'so-simple/loading';

import './content.css';

export default props => {
    return (
        <div className="content">
            <Header {...props.header} />
            <Switch>
                <Route
                    exact path={URL_USER.home}
                    render={() => <Home {...props.home} />}
                />
                <Route
                    path={`${URL_USER.photo}/`}
                    render={() => <SelectedPhoto {...props.selectedPhoto} />}
                />
            </Switch>
            {props.isBusy ? <ShowBusy {...props.showBusy} /> : null}
        </div>
    )
};
