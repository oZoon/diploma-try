"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../lib/constants.js");

var _default = function _default(state, action) {
  var newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case _constants.LIST_PHOTOS_START:
      newState.state = true;
      return newState;

    case _constants.LIST_PHOTOS_SUCCESS:
      Object.keys(newState).forEach(function (item) {
        return newState[item] = action.result[item];
      });
      return newState;

    case _constants.LIST_PHOTOS_ERROR:
      newState.state = false;
      newState.error = action.err;
      return newState;

    case _constants.PHOTO_LIKE:
      newState.likedPhotosId.push(action.id);
      newState.json = action.json;
      return newState;

    case _constants.PHOTO_UNLIKE:
      newState.likedPhotosId = newState.likedPhotosId.filter(function (item) {
        return item !== action.id;
      });
      newState.json = action.json;
      return newState;

    default:
      return newState;
  }
};

exports["default"] = _default;