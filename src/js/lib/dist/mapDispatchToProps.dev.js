"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = require("../core/actions/user.js");

var _photos = require("../core/actions/photos.js");

var _default = function _default(dispatch) {
  return {
    onLogIn: function onLogIn(data) {
      return dispatch((0, _user.logIn)(data));
    },
    doContinueLogIn: function doContinueLogIn(data) {
      return dispatch((0, _user.continueLogIn)(data));
    },
    onLogOut: function onLogOut(history) {
      return dispatch((0, _user.logOut)(history));
    },
    onListPhotos: function onListPhotos(data) {
      return dispatch((0, _photos.listPhotos)(data));
    },
    onLikePhoto: function onLikePhoto(data) {
      return dispatch((0, _photos.likePhoto)(data));
    },
    onUnLikePhoto: function onUnLikePhoto(data) {
      return dispatch((0, _photos.unLikePhoto)(data));
    }
  };
};

exports["default"] = _default;