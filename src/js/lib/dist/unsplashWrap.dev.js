"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _unsplashJs = _interopRequireWildcard(require("unsplash-js"));

var _constants = require("./constants.js");

var _user = require("../core/actions/user.js");

var _photos = require("../core/actions/photos.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UnsplashWrap =
/*#__PURE__*/
function () {
  function UnsplashWrap() {
    _classCallCheck(this, UnsplashWrap);

    var init = {
      accessKey: _constants.ACCESS_KEY,
      secret: _constants.SECRET,
      callbackUrl: _constants.URL_SITE
    };
    this.unsplash = new _unsplashJs["default"](init);
    this.authenticationUrl = this.unsplash.auth.getAuthenticationUrl(["public", "write_likes"]);
    this.token = '';
  }

  _createClass(UnsplashWrap, [{
    key: "authFirst",
    value: function authFirst() {
      location.assign(this.authenticationUrl);
    }
  }, {
    key: "setToken",
    value: function setToken(token) {
      this.unsplash.auth.setBearerToken(token);
      this.token = token;
    }
  }, {
    key: "authSecond",
    value: function authSecond(code, dispatch, history) {
      var _this = this;

      return regeneratorRuntime.async(function authSecond$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(this.unsplash.auth.userAuthentication(code).then(_unsplashJs.toJson).then(function _callee(json) {
                var token;
                return regeneratorRuntime.async(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!json.access_token) {
                          _context.next = 7;
                          break;
                        }

                        token = json.access_token;

                        _this.unsplash.auth.setBearerToken(json.access_token);

                        _context.next = 5;
                        return regeneratorRuntime.awrap(_this.unsplash.currentUser.profile().then(_unsplashJs.toJson).then(function (json) {
                          var result = {
                            code: code,
                            token: token,
                            name: json.first_name,
                            json: json
                          };
                          dispatch((0, _user.userSuccess)(result));
                          history.push('/', 'logInSuccess');
                        })["catch"](function (err) {
                          dispatch((0, _user.userError)(err));
                        }));

                      case 5:
                        _context.next = 8;
                        break;

                      case 7:
                        dispatch((0, _user.userError)(json));

                      case 8:
                      case "end":
                        return _context.stop();
                    }
                  }
                });
              })["catch"](function (err) {
                dispatch((0, _user.userError)(err));
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "getList",
    value: function getList(photos, dispatch) {
      return regeneratorRuntime.async(function getList$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              this.unsplash.photos.listPhotos(photos.page + 1, _constants.LIST_PHOTOS_COUNT, "latest").then(_unsplashJs.toJson).then(function (json) {
                dispatch((0, _photos.photosSuccess)(json, photos));
              })["catch"](function (err) {
                dispatch((0, _photos.photosError)(err));
              });

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "likePhoto",
    value: function likePhoto(photoId) {
      return regeneratorRuntime.async(function likePhoto$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              this.unsplash.photos.likePhoto(photoId).then(_unsplashJs.toJson).then(function (json) {
                console.log(['likePhoto', json]);
              });

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "unLikePhoto",
    value: function unLikePhoto(photoId) {
      return regeneratorRuntime.async(function unLikePhoto$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              this.unsplash.photos.unlikePhoto(photoId).then(_unsplashJs.toJson).then(function (json) {
                console.log(['unlikePhoto', json]);
              });

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    }
  }]);

  return UnsplashWrap;
}();

var _default = new UnsplashWrap();

exports["default"] = _default;