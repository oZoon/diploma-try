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
    console.log(photos);
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
    const { id, unsplash, token, action } = data;
    return dispatch => {
        dispatch(start());
        unsplash.likePhoto(id, dispatch, token, action);
    };
};
export const likePhotoResult = ({ photoId, action }) => {
    return {
        type: PHOTO_LIKE,
        photoId,
        action,
    };
};
