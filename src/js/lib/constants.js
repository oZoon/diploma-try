import packageJson from '../../../package.json';

export const VERSION = packageJson.version;

let url_site = 'http://localhost:8080';
const hostname = window && window.location && window.location.hostname;
if (hostname != 'localhost') url_site = `http://${hostname}`;
export const URL_SITE = url_site;

export const TEST_MODE = true;
export const PERIOD = 3600; // period to update photos list, in seconds

export const ACCESS_KEY = 'KVx67XvmzAv0NWFzGhl02RT3YJ0kXfNhhffCmc6V2Vk';
export const SECRET = 'NEbVoZN0xAL1MJkl9GCIfHmud75H71MjACB2fo0UdiU';
export const URL_USER = {
    home: '/',
    photo: '/photo',
    collections: '/collections',
    liked: '/liked',
};
export const PHOTO_WIDTH = 300;

export const LOG_IN_START = 'LOG_IN_START';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';
export const LOG_OUT = 'LOG_OUT';

export const LIST_PHOTOS_START = 'LIST_PHOTOS_START';
export const LIST_PHOTOS_SUCCESS = 'LIST_PHOTOS_SUCCESS';
export const LIST_PHOTOS_ERROR = 'LIST_PHOTOS_ERROR';
export const LIST_PHOTOS_COUNT = 10;

export const PHOTO_LIKE = 'PHOTO_LIKE';

export const WINDOW_WIDTH = document.documentElement.clientWidth - 32;
export const WINDOW_HEIGHT = document.documentElement.clientHeight - 86;
