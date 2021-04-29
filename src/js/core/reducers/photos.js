import {
    LIST_PHOTOS_START,
    LIST_PHOTOS_SUCCESS,
    LIST_PHOTOS_ERROR,
    PHOTO_LIKE,
} from '../../lib/constants.js';

export default (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case LIST_PHOTOS_START:
            newState.state = true;
            return newState;
        case LIST_PHOTOS_SUCCESS:
            Object.keys(newState).forEach(item => newState[item] = action.result[item])
            return newState;
        case LIST_PHOTOS_ERROR:
            newState.state = false;
            newState.error = action.err;
            return newState;
        case PHOTO_LIKE:
            newState.list.find(item => item.id == action.id).liked_by_user = action.result;
            newState.state = false;
            return newState;
        default:
            return newState;
    }
}
