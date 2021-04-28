import {
    LOG_IN_START,
    LOG_IN_SUCCESS,
    LOG_IN_ERROR,
    LOG_OUT,
} from '../../lib/constants.js';

export const logIn = unsplash => {
    return (dispatch) => {
        // dispatch(start());
        unsplash.authFirst();
    }
}

export const continueLogIn = ({ history, unsplash }) => {
    return (dispatch) => {
        const code = history.location.search.substr(6);
        unsplash.authSecond(code, dispatch, history);
    }
}

export const logOut = history => {
    history.push('/', 'logOut');
    return {
        type: LOG_OUT,
    };

};

const start = () => {
    return {
        type: LOG_IN_START,
    }
}

export const userSuccess = result => {
    return {
        type: LOG_IN_SUCCESS,
        result,
    }
}

export const userError = err => {
    return {
        type: LOG_IN_ERROR,
        err,
    }
}
