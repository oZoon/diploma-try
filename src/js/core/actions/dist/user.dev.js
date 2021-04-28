"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userError = exports.userSuccess = exports.logOut = exports.continueLogIn = exports.logIn = void 0;

var _constants = require("../../lib/constants.js");

var logIn = function logIn(unsplash) {
  return function (dispatch) {
    // dispatch(start());
    unsplash.authFirst();
  };
};

exports.logIn = logIn;

var continueLogIn = function continueLogIn(_ref) {
  var history = _ref.history,
      unsplash = _ref.unsplash;
  return function (dispatch) {
    var code = history.location.search.substr(6);
    unsplash.authSecond(code, dispatch, history);
  };
};

exports.continueLogIn = continueLogIn;

var logOut = function logOut(history) {
  history.push('/', 'logOut');
  return {
    type: _constants.LOG_OUT
  };
};

exports.logOut = logOut;

var start = function start() {
  return {
    type: _constants.LOG_IN_START
  };
};

var userSuccess = function userSuccess(result) {
  return {
    type: _constants.LOG_IN_SUCCESS,
    result: result
  };
};

exports.userSuccess = userSuccess;

var userError = function userError(err) {
  return {
    type: _constants.LOG_IN_ERROR,
    err: err
  };
};

exports.userError = userError;