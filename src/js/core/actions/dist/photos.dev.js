"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unLikePhoto = exports.likePhoto = exports.photosError = exports.photosSuccess = exports.listPhotos = void 0;

var _constants = require("../../lib/constants.js");

var _utils = require("../../lib/utils.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var listPhotos = function listPhotos(data) {
  var photos = data.photos,
      unsplash = data.unsplash;
  return function (dispatch) {
    dispatch(start());
    unsplash.getList(photos, dispatch);
  };
};

exports.listPhotos = listPhotos;

var start = function start() {
  return {
    type: _constants.LIST_PHOTOS_START
  };
};

var photosSuccess = function photosSuccess(json, photos) {
  var time = +new Date();

  var _ref = photos.time + _constants.PERIOD < time ? [photos.page + 1, (0, _utils.getUniquePhotos)(photos.list, json)] : [1, json],
      _ref2 = _slicedToArray(_ref, 2),
      page = _ref2[0],
      list = _ref2[1];

  var result = {
    state: false,
    page: page,
    time: time,
    list: list,
    error: photos.error,
    likedPhotosId: photos.likedPhotosId,
    jsonLike: photos.jsonLike
  };
  return {
    type: _constants.LIST_PHOTOS_SUCCESS,
    result: result
  };
};

exports.photosSuccess = photosSuccess;

var photosError = function photosError(err) {
  return {
    type: _constants.LIST_PHOTOS_ERROR,
    err: err
  };
};

exports.photosError = photosError;

var likePhoto = function likePhoto(_ref3) {
  var id = _ref3.id;
  console.log(id);
  return {
    type: _constants.PHOTO_LIKE,
    id: id
  };
};

exports.likePhoto = likePhoto;

var unLikePhoto = function unLikePhoto(_ref4) {
  var id = _ref4.id;
  return {
    type: _constants.PHOTO_UNLIKE,
    id: id
  };
};

exports.unLikePhoto = unLikePhoto;