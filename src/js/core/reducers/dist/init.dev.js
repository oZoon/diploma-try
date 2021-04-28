"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _records = _interopRequireDefault(require("../../lib/records.js"));

var _constants = require("../../lib/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var init = {
  user: {
    isLogged: false,
    state: false,
    token: '',
    name: '',
    error: {},
    code: '',
    json: {}
  },
  photos: {
    state: false,
    page: 0,
    time: 0,
    list: [],
    error: {},
    likedPhotosId: [],
    jsonLike: {}
  }
};

var initStore = _records["default"].getRecord("diplomaSimple".concat(_constants.VERSION));

init = initStore !== null ? initStore : init;

_records["default"].setRecord("diplomaSimple".concat(_constants.VERSION), init);

var _default = init;
exports["default"] = _default;