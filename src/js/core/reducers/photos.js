import {
    LIST_PHOTOS_START,
    LIST_PHOTOS_SUCCESS,
    LIST_PHOTOS_ERROR,
    PHOTO_LIKE,
} from '../../lib/constants';

export default (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case LIST_PHOTOS_START:
            newState.state = true;
            return newState;
        case LIST_PHOTOS_SUCCESS:
            for (const item of Object.keys(newState))
                newState[item] = action.result[item];
            return newState;
        case LIST_PHOTOS_ERROR:
            newState.state = false;
            newState.error = action.err;
            return newState;
        case PHOTO_LIKE:
            for (let i = 0; i < newState.list.length; i++) {
                if (newState.list[i].id == action.photoId) {
                    newState.list[i].liked_by_user = action.action;
                    newState.list[i].likes = action.action
                        ? newState.list[i].likes + 1
                        : newState.list[i].likes - 1;
                    break;
                }
            }
            newState.state = false;
            return newState;
        default:
            return newState;
    }
};
