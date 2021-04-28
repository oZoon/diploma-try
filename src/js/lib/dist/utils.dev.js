"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.separatePhotoBig = exports.getUniquePhotos = exports.minHeightFeed = exports.calcMax = exports.separatePhotos = void 0;

var _constants = require("./constants.js");

var separatePhotos = function separatePhotos(list) {
  var result = [[], [], []];

  if (list) {
    list.forEach(function (item) {
      var index = calcMinHeightIndex(result);
      result[index] = [].concat(result[index], item);
    });
  }

  return result;
};

exports.separatePhotos = separatePhotos;

var calcMinHeightIndex = function calcMinHeightIndex(tripleArray) {
  var array = calcAllHeights(tripleArray);
  return array.findIndex(function (e) {
    return e == calcMinHeight(array);
  });
};

var calcMinHeight = function calcMinHeight(tripleArray) {
  return Math.min(tripleArray[0], tripleArray[1], tripleArray[2]);
};

var calcMaxHeight = function calcMaxHeight(tripleArray) {
  return Math.max(tripleArray[0], tripleArray[1], tripleArray[2]);
};

var calcMax = function calcMax(tripleArray) {
  var array = calcAllHeights(tripleArray);
  var maxHeight = calcMaxHeight(array);
  var count = tripleArray[array.findIndex(function (e) {
    return e == maxHeight;
  })].length;
  return parseInt(maxHeight + count * 301 / 10);
};

exports.calcMax = calcMax;

var calcAllHeights = function calcAllHeights(tripleArray) {
  var array = [0, 0, 0];

  if (tripleArray) {
    tripleArray.forEach(function (item, i) {
      array[i] = 0;
      item.forEach(function (item2) {
        array[i] += item2.height * _constants.PHOTO_WIDTH / item2.width;
      });
    });
  }

  return array;
};

var minHeightFeed = function minHeightFeed(tripleArray) {
  return calcMinHeight(calcAllHeights(tripleArray));
};

exports.minHeightFeed = minHeightFeed;

var getUniquePhotos = function getUniquePhotos(oldList, addingList) {
  if (!oldList) {
    return addingList;
  } else {
    var old = JSON.parse(JSON.stringify(oldList));
    var adding = JSON.parse(JSON.stringify(addingList));
    adding.forEach(function (item) {
      return !old.some(function (item2) {
        return item2.id == item.id;
      }) ? old.push(item) : null;
    });
    return old;
  }
};

exports.getUniquePhotos = getUniquePhotos;

var calcSizePhoto = function calcSizePhoto(dataPhotoBig) {
  // соотношение сторон изображения
  var koeff = dataPhotoBig.width / dataPhotoBig.height;
  var realWidth, // расчетная ширина изображения
  realHeight, // расчетная высота изображения
  tempWidth, // временная ширина
  tempHeight; // временная высота

  var boo = false;

  if (dataPhotoBig.width > _constants.WINDOW_WIDTH) {
    tempWidth = _constants.WINDOW_WIDTH;
    tempHeight = tempWidth / koeff;

    if (tempHeight < _constants.WINDOW_HEIGHT) {
      boo = true;
      realWidth = tempWidth;
      realHeight = tempHeight;
    }
  } else {
    if (dataPhotoBig.height > _constants.WINDOW_HEIGHT) {
      boo = true;
      realHeight = _constants.WINDOW_HEIGHT;
      realWidth = _constants.WINDOW_HEIGHT * koeff;
    } else {
      boo = true;
      realHeight = dataPhotoBig.height;
      realWidth = dataPhotoBig.width;
    }
  }

  if (!boo) {
    if (dataPhotoBig.height > _constants.WINDOW_HEIGHT) {
      tempHeight = _constants.WINDOW_HEIGHT;
      tempWidth = tempHeight * koeff;

      if (tempWidth < _constants.WINDOW_WIDTH) {
        realWidth = tempWidth;
        realHeight = tempHeight;
      }
    } else {
      if (dataPhotoBig.width > _constants.WINDOW_WIDTH) {
        realWidth = _constants.WINDOW_WIDTH;
        realHeight = _constants.WINDOW_WIDTH / koeff;
      } else {
        realHeight = dataPhotoBig.height;
        realWidth = dataPhotoBig.width;
      }
    }
  }

  return [realWidth, realHeight];
};

var separatePhotoBig = function separatePhotoBig(photos, history, onLikePhoto, onUnLikePhoto) {
  var id = history.location.pathname.split('/').length == 3 ? history.location.pathname.split('/')[2] : null;
  var dataPhotoBig = id ? photos.list.find(function (item) {
    return item.id == id;
  }) : null;
  return dataPhotoBig ? {
    photoBig: {
      src: dataPhotoBig.urls.regular,
      size: calcSizePhoto(dataPhotoBig)
    },
    authorProfileLinkBig: {
      propsLink: {
        className: "link-unsplash-big",
        href: "https://unsplash.com/@".concat(dataPhotoBig.user.username),
        target: "_blank"
      },
      imageSrc: dataPhotoBig.user.profile_image.large,
      // small, medium, large
      propsName: {
        children: dataPhotoBig.user.name,
        className: 'link-name-big'
      },
      propsUsername: {
        children: '@' + dataPhotoBig.user.username,
        className: 'link-username-big'
      }
    },
    publicDateBig: {
      date: dataPhotoBig.updated_at
    },
    likeDataBig: {
      count: dataPhotoBig.likes,
      color: photos.likedPhotosId.includes(id) ? 'red' : 'black',
      propsLike: {
        onClick: photos.likedPhotosId.includes(id) ? onUnLikePhoto : onLikePhoto,
        data: {
          id: id
        },
        className: 'button-like'
      }
    },
    btnLikePhoto: {
      className: 'btn-like',
      onClick: onLikePhoto,
      children: 'лайк',
      data: {
        id: id
      }
    },
    btnUnLikePhoto: {
      className: 'btn-unlike',
      onClick: onUnLikePhoto,
      children: 'дизлайк',
      data: {
        id: id
      }
    },
    btnGoBack: {
      className: 'btn-go-back',
      onClick: history.goBack,
      children: 'вернуться к ленте фотографий'
    }
  } : undefined;
};

exports.separatePhotoBig = separatePhotoBig;