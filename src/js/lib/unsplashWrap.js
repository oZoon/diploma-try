import Unsplash, { toJson } from 'unsplash-js';
import {
    URL_SITE,
    ACCESS_KEY,
    SECRET,
    LIST_PHOTOS_COUNT,
    LIST_LIKED_PHOTOS_COUNT,
    PROP_ADDED,
} from './constants';
import { userSuccess, userError } from '../core/actions/user';
import {
    photosSuccess,
    photosError,
    likePhotoResult,
} from '../core/actions/photos';
import {
    likedPhotosSuccess,
    likedPhotosError,
    // likedLikePhotoResult,
    addToLikedList,
    delFromLikedList,
} from '../core/actions/likedPhotos';
import { changeUserLike } from '../core/actions/user';

class UnsplashWrap {
    constructor() {
        const init = {
            accessKey: ACCESS_KEY,
            secret: SECRET,
            callbackUrl: URL_SITE,
        };
        this.unsplash = new Unsplash(init);
        this.authenticationUrl = this.unsplash.auth.getAuthenticationUrl([
            'public',
            'write_likes',
        ]);
        this.token = '';
    }

    authFirst() {
        location.assign(this.authenticationUrl);
    }

    setToken(token) {
        this.unsplash.auth.setBearerToken(token);
        this.token = token;
    }

    async authSecond(code, dispatch, history) {
        await this.unsplash.auth
            .userAuthentication(code)
            .then(toJson)
            .then(async json => {
                if (json.access_token) {
                    const token = json.access_token;
                    this.unsplash.auth.setBearerToken(json.access_token);
                    await this.unsplash.currentUser
                        .profile()
                        .then(toJson)
                        .then(json => {
                            const result = {
                                code,
                                token,
                                name: json.first_name,
                                json,
                            };
                            dispatch(userSuccess(result));
                            history.push('/', 'logInSuccess');
                        })
                        .catch(error => {
                            dispatch(userError(error));
                        });
                } else {
                    dispatch(userError(json));
                }
            })
            .catch(error => {
                dispatch(userError(error));
            });
    }

    async getList(photos, dispatch) {
        this.unsplash.photos
            .listPhotos(photos.page + 1, LIST_PHOTOS_COUNT, 'latest')
            .then(toJson)
            .then(json => {
                dispatch(photosSuccess(json, photos));
            })
            .catch(error => {
                dispatch(photosError(error));
            });
    }

    async getLikedList(likedPhotos, dispatch, username) {
        this.unsplash.users
            .likes(
                username,
                likedPhotos.page + 1,
                LIST_LIKED_PHOTOS_COUNT,
                'latest',
            )
            .then(toJson)
            .then(json => {
                const data = JSON.parse(JSON.stringify(json));
                data.forEach(item => (item[PROP_ADDED] = true));
                dispatch(likedPhotosSuccess(data, likedPhotos));
            })
            .catch(error => {
                dispatch(likedPhotosError(error));
            });
    }

    async likePhoto(photoId, dispatch, token, action, pubs) {
        this.setToken(token);
        const request = action
            ? this.unsplash.photos.likePhoto(photoId)
            : this.unsplash.photos.unlikePhoto(photoId);
        request
            .then(toJson)
            .then(json => {
                console.log(json);
                dispatch(changeUserLike(action == true ? 1 : -1));
                dispatch(likePhotoResult({ photoId, action }));
                if (action) {
                    console.log('action = true');
                    dispatch(addToLikedList({ photo: json.photo }));
                } else {
                    console.log('action = false');
                    dispatch(delFromLikedList({ id: json.photo.id }));
                }
            })
            .catch(error => {
                dispatch(photosError(error));
            });
    }
}
export default new UnsplashWrap();
