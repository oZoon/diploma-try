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
            console.log(LIST_PHOTOS_START);
            newState.state = true;
            return newState;
        case LIST_PHOTOS_SUCCESS:
            console.log(LIST_PHOTOS_SUCCESS);
            for (const item of Object.keys(newState))
                newState[item] = action.result[item];
            return newState;
        case LIST_PHOTOS_ERROR:
            console.log(LIST_PHOTOS_ERROR);
            newState.state = false;
            newState.error = action.err;
            return newState;
        case PHOTO_LIKE:
            console.log(PHOTO_LIKE);
            if (newState.list.some(item => item.id == action.photoId)) {
                const index = newState.list.findIndex(
                    item => item.id == action.photoId,
                );
                const change = action.action ? 1 : -1;
                newState.list[index].liked_by_user = action.action;
                newState.list[index].likes =
                    newState.list[index].likes + change;
            }
            newState.state = false;
            return newState;
        default:
            return newState;
    }
};
