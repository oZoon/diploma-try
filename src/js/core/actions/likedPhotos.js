import {
    LIST_LIKED_PHOTOS_START,
    LIST_LIKED_PHOTOS_SUCCESS,
    LIST_LIKED_PHOTOS_ERROR,
    LIST_LIKED_ADD,
    LIST_LIKED_DEL,
} from '../../lib/constants';
import { getUniquePhotos } from '../../lib/utils';

const start = () => {
    return {
        type: LIST_LIKED_PHOTOS_START,
    };
};
export const listLikedPhotos = data => {
    const { likedPhotos, unsplash, username } = data;
    return dispatch => {
        dispatch(start());
        unsplash.getLikedList(likedPhotos, dispatch, username);
    };
};

export const likedPhotosSuccess = (json, likedPhotos) => {
    const [page, list] = [
        likedPhotos.page + 1,
        getUniquePhotos(likedPhotos.list, json),
    ];
    const result = {
        state: false,
        page,
        list,
        error: likedPhotos.error,
    };
    return {
        type: LIST_LIKED_PHOTOS_SUCCESS,
        result,
    };
};

export const likedPhotosError = err => {
    return {
        type: LIST_LIKED_PHOTOS_ERROR,
        err,
    };
};

export const addToLikedList = data => {
    console.log('add');
    return {
        type: LIST_LIKED_ADD,
        photo: data.photo,
    };
};

export const delFromLikedList = data => {
    console.log('del');
    return {
        type: LIST_LIKED_DEL,
        id: data.id,
    };
};
