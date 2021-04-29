import {
    LIST_PHOTOS_START,
    LIST_PHOTOS_SUCCESS,
    LIST_PHOTOS_ERROR,
    PERIOD,
    PHOTO_LIKE,
} from '../../lib/constants.js';
import { getUniquePhotos } from '../../lib/utils.js';

export const listPhotos = data => {
    const { photos, unsplash } = data;
    return (dispatch) => {
        dispatch(start());
        unsplash.getList(photos, dispatch);
    }
}
const start = () => {
    return {
        type: LIST_PHOTOS_START,
    }
}

export const photosSuccess = (json, photos) => {
    const time = +new Date();
    const [page, list] = photos.time + PERIOD < time ?
        [photos.page + 1, getUniquePhotos(photos.list, json)] :
        [1, json];
    const result = {
        state: false,
        page,
        time,
        list,
        error: photos.error,
        likedPhotosId: photos.likedPhotosId,
        jsonLike: photos.jsonLike,
    }
    return {
        type: LIST_PHOTOS_SUCCESS,
        result,
    }
}
export const photosError = err => {
    return {
        type: LIST_PHOTOS_ERROR,
        err,
    }
}

export const likePhoto = data => {
    const { id, unsplash, token, action } = data;
    return dispatch => {
        dispatch(start());
        unsplash.likePhoto(id, dispatch, token, action);
    }
}
export const likePhotoResult = (id, result) => {
    return {
        type: PHOTO_LIKE,
        id,
        result,
    }
}
