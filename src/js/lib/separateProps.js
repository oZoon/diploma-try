import React from 'react';
import { separatePhotos, minHeightFeed, separatePhotoBig } from 'lib/utils';
import ImgUp from 'images/up2.png';
import ImgDown from 'images/down2.png';

export default (props, unsplash) => {
    const {
        onLogIn,
        onLogOut,
        user,
        history,
        photos,
        doContinueLogIn,
        onListPhotos,
        onLikePhoto,
        onUnLikePhoto,
    } = props;

    const authSecond = !user.isLogged && user.state && history.location.search.substr(0, 6) == '?code=';

    const propsAuth = {
        propsText: {
            children: 'Для входа требуется аккаунт unsplash.com или facebook.com',
        },
        propsButton: {
            onClick: onLogIn,
            children: 'ВХОД',
            data: unsplash,
        },
    };
    const showBusy = {
        size: 'big',
        className: 'loading-big',
    };

    const showAuth = !user.isLogged && !user.state;
    const isBusy = user.state;
    const propsLogIn = {
        history,
        unsplash,
    }
    const tripleFeed = separatePhotos(photos.list);
    const minHeight = minHeightFeed(tripleFeed);
    const selectedPhoto = separatePhotoBig(photos, history, onLikePhoto, onUnLikePhoto);

    const propsContent = {
        header: {
            propsUserName: {
                style: 'header-item-logo',
                link: 'home',
                text: user.name,
            },
            propsUserPhotos: {
                link: 'photos',
                text: 'фотографии',
                number: user.json.total_photos,
            },
            propsUserCollections: {
                link: 'collections',
                text: 'коллекции',
                number: user.json.total_collections,
            },
            propsUserLiked: {
                link: 'liked',
                text: 'лайки',
                number: user.json.total_likes,
            },
            propsLogOut: {
                onLogOut,
                history,
            },
        },
        home: {
            tripleFeed,
            propsNextPhotos: {
                className: photos.list.length ? 'button-next-photos' : 'button-first-photos',
                onClick: onListPhotos,
                data: {
                    photos,
                    unsplash,
                },
                children: photos.list.length ? 'загрузить еще' : 'загрузить ленту фотографий',
            },
            likedPhotosId: photos.likedPhotosId,
            propsBtnUp: {
                className: 'button-move-top',
                children: <img src={ImgUp} className="arrow" />,
            },
            propsNavVisible: photos.list.length ? 'block' : 'none',
            propsBtnDown: {
                className: 'button-move-bottom',
                children: <img src={ImgDown} className="arrow" />,
            },
        },
        isBusy: photos.state,
        showBusy: {
            size: 'small',
            className: 'loading-small',
        },
        selectedPhoto,
        collections: {

        },
        liked: {

        },
    }

    return {
        propsAuth,
        showAuth,
        isBusy,
        showBusy,
        propsContent,
        doContinueLogIn,
        propsLogIn,
        authSecond,
    }
}
