import {
    LOG_IN_START,
    LOG_IN_SUCCESS,
    LOG_IN_ERROR,
    LOG_OUT,
} from '../../lib/constants.js';

export default (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
    case LOG_IN_START:
        newState.state = true;
        return newState;
    case LOG_IN_SUCCESS:
        newState.state = false;
        newState.isLogged = true;
        newState.code = action.result.code;
        newState.token = action.result.token;
        newState.name = action.result.name;
        newState.json = action.result.json;
        newState.error = {};
        return newState;
    case LOG_IN_ERROR:
        newState.isLogged = false;
        newState.state = false;
        newState.error = action.err;
        return newState;
    case LOG_OUT:
        newState.isLogged = false;
        newState.state = false;
        newState.error = {};
        newState.code = '';
        newState.token = '';
        newState.name = '';
        newState.json = {};
        return newState;
    default:
        return newState;
    }
};
