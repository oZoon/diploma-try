import Unsplash, { toJson } from 'unsplash-js';
import {
    URL_SITE,
    ACCESS_KEY,
    SECRET,
    LIST_PHOTOS_COUNT,
} from './constants.js';
import { userSuccess, userError } from '../core/actions/user.js';
import {
    photosSuccess,
    photosError,
    likePhotoResult,
} from '../core/actions/photos.js';

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

    async likePhoto(photoId, dispatch, token, action) {
        this.setToken(token);
        const request = action
            ? this.unsplash.photos.likePhoto(photoId)
            : this.unsplash.photos.unlikePhoto(photoId);
        request
            .then(toJson)
            .then(json => {
                dispatch(likePhotoResult(photoId, action));
            })
            .catch(error => {
                dispatch(photosError(error));
            });
    }
}
export default new UnsplashWrap();
