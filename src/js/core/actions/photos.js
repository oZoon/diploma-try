import {
    LIST_PHOTOS_START,
    LIST_PHOTOS_SUCCESS,
    LIST_PHOTOS_ERROR,
    PERIOD,
    PHOTO_LIKE,
    PHOTO_UNLIKE,
} from "lib/constants";
import { getUniquePhotos } from 'lib/utils';

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

export const likePhoto = ({id}) => {
    console.log(id);
    return {
        type: PHOTO_LIKE,
        id,
    }
}

export const unLikePhoto = ({ id }) => {
    return {
        type: PHOTO_UNLIKE,
        id,
    }
}
