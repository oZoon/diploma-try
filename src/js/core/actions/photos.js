import {
    LIST_PHOTOS_START,
    LIST_PHOTOS_SUCCESS,
    LIST_PHOTOS_ERROR,
    PERIOD,
    PHOTO_LIKE,
} from '../../lib/constants';
import { getUniquePhotos } from '../../lib/utils';

const start = () => {
    return {
        type: LIST_PHOTOS_START,
    };
};
export const listPhotos = data => {
    const { photos, unsplash } = data;
    return dispatch => {
        dispatch(start());
        unsplash.getList(photos, dispatch);
    };
};

export const photosSuccess = (json, photos) => {
    const [page, list] = [photos.page + 1, getUniquePhotos(photos.list, json)];
    const result = {
        state: false,
        page,
        list,
        error: photos.error,
    };
    return {
        type: LIST_PHOTOS_SUCCESS,
        result,
    };
};
export const photosError = err => {
    return {
        type: LIST_PHOTOS_ERROR,
        err,
    };
};

export const likePhoto = data => {
    const { id, unsplash, token, action, pubs } = data;
    return dispatch => {
        dispatch(start());
        unsplash.likePhoto(id, dispatch, token, action, pubs);
    };
};
export const likePhotoResult = data => {
    const { photoId, action } = data;
    console.log(data);
    return {
        type: PHOTO_LIKE,
        data,
        photoId,
        action,
    };
};
