import {
    LIST_LIKED_PHOTOS_START,
    LIST_LIKED_PHOTOS_SUCCESS,
    LIST_LIKED_PHOTOS_ERROR,
    LIST_LIKED_ADD,
    LIST_LIKED_DEL,
    PROP_ADDED,
} from '../../lib/constants';

export default (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case LIST_LIKED_PHOTOS_START:
            console.log(LIST_LIKED_PHOTOS_START);
            newState.state = true;
            return newState;
        case LIST_LIKED_PHOTOS_SUCCESS:
            console.log(LIST_LIKED_PHOTOS_SUCCESS);
            for (const item of Object.keys(newState))
                newState[item] = action.result[item];
            return newState;
        case LIST_LIKED_PHOTOS_ERROR:
            console.log(LIST_LIKED_PHOTOS_ERROR);
            newState.state = false;
            newState.error = action.err;
            return newState;
        case LIST_LIKED_ADD:
            console.log(LIST_LIKED_ADD);
            console.log(newState.list);
            if (newState.list.length > 0) {
                if (
                    newState.list.filter(item => item.id == action.photo.id)
                        .length == 0
                ) {
                    action.photo[PROP_ADDED] = true;
                    newState.list.unshift(action.photo);
                } else {
                    newState.list[
                        newState.list.findIndex(
                            item => item.id == action.photo.id,
                        )
                    ][PROP_ADDED] = true;
                }
            }
            newState.state = false;
            console.log(newState.list);
            return newState;
        case LIST_LIKED_DEL:
            console.log(LIST_LIKED_DEL);
            console.log(newState.list);
            if (
                newState.list.length > 0 &&
                newState.list.filter(item => item.id == action.id).length != 0
            ) {
                console.log('make needShow = false');
                newState.list[
                    newState.list.findIndex(item => item.id == action.id)
                ][PROP_ADDED] = false;
                console.log(
                    newState.list[
                        newState.list.findIndex(item => item.id == action.id)
                    ],
                );
            }
            newState.state = false;
            console.log(newState.list);
            return newState;
        default:
            return newState;
    }
};
