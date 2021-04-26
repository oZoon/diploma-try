"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WINDOW_HEIGHT = exports.WINDOW_WIDTH = exports.PHOTO_UNLIKE = exports.PHOTO_LIKE = exports.LIST_PHOTOS_COUNT = exports.LIST_PHOTOS_ERROR = exports.LIST_PHOTOS_SUCCESS = exports.LIST_PHOTOS_START = exports.LOG_OUT = exports.LOG_IN_ERROR = exports.LOG_IN_SUCCESS = exports.LOG_IN_START = exports.PHOTO_WIDTH = exports.URL_USER = exports.SECRET = exports.ACCESS_KEY = exports.PERIOD = exports.TEST_MODE = exports.URL_SITE = exports.VERSION = void 0;

var _package = _interopRequireDefault(require("../../../package.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VERSION = _package["default"].version;
exports.VERSION = VERSION;
var url_site = 'http://localhost:8080';
var hostname = window && window.location && window.location.hostname;
if (hostname != 'localhost') url_site = "http://".concat(hostname);
var URL_SITE = url_site;
exports.URL_SITE = URL_SITE;
var TEST_MODE = true;
exports.TEST_MODE = TEST_MODE;
var PERIOD = 3600; // period to update photos list, in seconds

exports.PERIOD = PERIOD;
var ACCESS_KEY = 'KVx67XvmzAv0NWFzGhl02RT3YJ0kXfNhhffCmc6V2Vk';
exports.ACCESS_KEY = ACCESS_KEY;
var SECRET = 'NEbVoZN0xAL1MJkl9GCIfHmud75H71MjACB2fo0UdiU';
exports.SECRET = SECRET;
var URL_USER = {
  home: '/',
  photo: '/photo',
  collections: '/collections',
  liked: '/liked'
};
exports.URL_USER = URL_USER;
var PHOTO_WIDTH = 300;
exports.PHOTO_WIDTH = PHOTO_WIDTH;
var LOG_IN_START = 'LOG_IN_START';
exports.LOG_IN_START = LOG_IN_START;
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
exports.LOG_IN_SUCCESS = LOG_IN_SUCCESS;
var LOG_IN_ERROR = 'LOG_IN_ERROR';
exports.LOG_IN_ERROR = LOG_IN_ERROR;
var LOG_OUT = 'LOG_OUT';
exports.LOG_OUT = LOG_OUT;
var LIST_PHOTOS_START = 'LIST_PHOTOS_START';
exports.LIST_PHOTOS_START = LIST_PHOTOS_START;
var LIST_PHOTOS_SUCCESS = 'LIST_PHOTOS_SUCCESS';
exports.LIST_PHOTOS_SUCCESS = LIST_PHOTOS_SUCCESS;
var LIST_PHOTOS_ERROR = 'LIST_PHOTOS_ERROR';
exports.LIST_PHOTOS_ERROR = LIST_PHOTOS_ERROR;
var LIST_PHOTOS_COUNT = 10;
exports.LIST_PHOTOS_COUNT = LIST_PHOTOS_COUNT;
var PHOTO_LIKE = 'PHOTO_LIKE';
exports.PHOTO_LIKE = PHOTO_LIKE;
var PHOTO_UNLIKE = 'PHOTO_UNLIKE';
exports.PHOTO_UNLIKE = PHOTO_UNLIKE;
var WINDOW_WIDTH = document.documentElement.clientWidth - 32;
exports.WINDOW_WIDTH = WINDOW_WIDTH;
var WINDOW_HEIGHT = document.documentElement.clientHeight - 86;
exports.WINDOW_HEIGHT = WINDOW_HEIGHT;