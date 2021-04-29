import { PHOTO_WIDTH, WINDOW_WIDTH, WINDOW_HEIGHT } from './constants.js';

export const separatePhotos = list => {
    const result = [[], [], []];
    if (list) {
        list.forEach(item => {
            const index = calcMinHeightIndex(result);
            result[index] = [].concat(result[index], item)
        });
    }
    return result;
}

const calcMinHeightIndex = tripleArray => {
    const array = calcAllHeights(tripleArray);
    return array.findIndex(e => e == calcMinHeight(array));
}

const calcMinHeight = tripleArray => Math.min(tripleArray[0], tripleArray[1], tripleArray[2]);

const calcMaxHeight = tripleArray => Math.max(tripleArray[0], tripleArray[1], tripleArray[2]);

export const calcMax = tripleArray => {
    const array = calcAllHeights(tripleArray);
    const maxHeight = calcMaxHeight(array);
    const count = tripleArray[array.findIndex(e => e == maxHeight)].length;
    return parseInt(maxHeight + count * 301 / 10);
}

const calcAllHeights = tripleArray => {
    const array = [0, 0, 0];
    if (tripleArray) {
        tripleArray.forEach((item, i) => {
            array[i] = 0;
            item.forEach(item2 => {
                array[i] += item2.height * PHOTO_WIDTH / item2.width;
            });
        });
    }
    return array;
}

export const minHeightFeed = tripleArray => calcMinHeight(calcAllHeights(tripleArray));


export const getUniquePhotos = (oldList, addingList) => {
    if (!oldList) {
        return addingList;
    } else {
        const old = JSON.parse(JSON.stringify(oldList));
        const adding = JSON.parse(JSON.stringify(addingList));
        adding.forEach(item => !old.some(item2 => item2.id == item.id) ? old.push(item) : null)
        return old;
    }
}


const calcSizePhoto = dataPhotoBig => {

    // соотношение сторон изображения
    const koeff = dataPhotoBig.width / dataPhotoBig.height;

    let realWidth, // расчетная ширина изображения
        realHeight, // расчетная высота изображения
        tempWidth, // временная ширина
        tempHeight; // временная высота
    let boo = false;

    if (dataPhotoBig.width > WINDOW_WIDTH) {
        tempWidth = WINDOW_WIDTH;
        tempHeight = tempWidth / koeff;
        if (tempHeight < WINDOW_HEIGHT) {
            boo = true;
            realWidth = tempWidth;
            realHeight = tempHeight;
        }
    } else {
        if (dataPhotoBig.height > WINDOW_HEIGHT) {
            boo = true;
            realHeight = WINDOW_HEIGHT;
            realWidth = WINDOW_HEIGHT * koeff;
        } else {
            boo = true;
            realHeight = dataPhotoBig.height;
            realWidth = dataPhotoBig.width;
        }
    }
    if (!boo) {
        if (dataPhotoBig.height > WINDOW_HEIGHT) {
            tempHeight = WINDOW_HEIGHT;
            tempWidth = tempHeight * koeff;
            if (tempWidth < WINDOW_WIDTH) {
                realWidth = tempWidth;
                realHeight = tempHeight;
            }
        } else {
            if (dataPhotoBig.width > WINDOW_WIDTH) {
                realWidth = WINDOW_WIDTH;
                realHeight = WINDOW_WIDTH / koeff;
            } else {
                realHeight = dataPhotoBig.height;
                realWidth = dataPhotoBig.width;
            }
        }
    }
    return [realWidth, realHeight];
}

export const separatePhotoBig = (photos, history, onLikePhoto, onUnLikePhoto, unsplash, token) => {
    const id = history.location.pathname.split('/').length == 3 ? history.location.pathname.split('/')[2] : null;
    const dataPhotoBig = id ? photos.list.find(item => item.id == id) : null;

    return dataPhotoBig ? {
        photoBig: {
            src: dataPhotoBig.urls.regular,
            size: calcSizePhoto(dataPhotoBig),
        },
        authorProfileLinkBig: {
            propsLink: {
                className: "link-unsplash-big",
                href: `https://unsplash.com/@${dataPhotoBig.user.username}`,
                target: "_blank",
            },
            imageSrc: dataPhotoBig.user.profile_image.large, // small, medium, large
            propsName: {
                children: dataPhotoBig.user.name,
                className: 'link-name-big',
            },
            propsUsername: {
                children: '@' + dataPhotoBig.user.username,
                className: 'link-username-big',
            },
        },
        publicDateBig: {
            date: dataPhotoBig.updated_at,
        },
        likeDataBig: {
            count: dataPhotoBig.likes,
            color: dataPhotoBig.liked_by_user ? 'red' : 'black',
            propsLike: {
                onClick: onLikePhoto,
                data: { id, unsplash, token, action: !dataPhotoBig.liked_by_user },
                className: 'button-like',
            }
        },
        btnLikePhoto: {
            className: 'btn-like',
            onClick: onLikePhoto,
            children: 'лайк',
            data: { id },
        },
        btnUnLikePhoto: {
            className: 'btn-unlike',
            onClick: onUnLikePhoto,
            children: 'дизлайк',
            data: { id },
        },
        btnGoBack: {
            className: 'btn-go-back',
            onClick: history.goBack,
            children: 'вернуться к ленте фотографий',
        },
    } : undefined;
}
