"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../lib/constants.js");

var _default = function _default(state, action) {
  var newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case _constants.LOG_IN_START:
      newState.state = true;
      return newState;

    case _constants.LOG_IN_SUCCESS:
      newState.state = false;
      newState.isLogged = true;
      newState.code = action.result.code;
      newState.token = action.result.token;
      newState.name = action.result.name;
      newState.json = action.result.json;
      newState.error = {};
      return newState;

    case _constants.LOG_IN_ERROR:
      newState.isLogged = false;
      newState.state = false;
      newState.error = action.err;
      return newState;

    case _constants.LOG_OUT:
      newState.isLogged = false;
      newState.state = false;
      newState.error = {};
      newState.code = '';
      newState.token = '';
      newState.name = '';
      newState.json = {};
      return newState;

    default:
      return newState;
  }
};

exports["default"] = _default;