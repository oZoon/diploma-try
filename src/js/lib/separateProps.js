import React from 'react';
import { separatePhotos, minHeightFeed, separatePhotoBig } from './utils';
import ImgUp from '../../images/up2.png';
import ImgDown from '../../images/down2.png';
import { PROP_ADDED } from './constants';

export default (props, unsplash) => {
    const {
        onLogIn,
        onLogOut,
        user,
        history,
        photos,
        likedPhotos,
        doContinueLogIn,
        onListPhotos,
        onListLikedPhotos,
        onLikePhoto,
    } = props;

    const authSecond =
        !user.isLogged && history.location.search.slice(0, 6) == '?code=';

    const propsAuth = {
        propsText: {
            children:
                'Для входа требуется аккаунт unsplash.com или facebook.com',
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
    };
    photos.list.forEach(element => (element.pubs = 'home'));
    const lp = {};
    lp.list = likedPhotos.list.filter(item => item[PROP_ADDED]);
    lp.list.forEach(item => (item.pubs = 'liked'));
    lp.page = likedPhotos.page;
    lp.error = likedPhotos.error;
    lp.state = likedPhotos.state;
    const tripleFeed = separatePhotos(photos.list);
    const tripleFeedLiked = separatePhotos(lp.list);
    const minHeight = minHeightFeed(tripleFeed);
    const selectedPhoto = separatePhotoBig(
        photos,
        likedPhotos,
        history,
        onLikePhoto,
        unsplash,
        user.token,
    );

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
                className:
                    photos.list.length > 0
                        ? 'button-next-photos'
                        : 'button-first-photos',
                onClick: onListPhotos,
                data: {
                    photos,
                    unsplash,
                },
                children:
                    photos.list.length > 0
                        ? 'загрузить еще'
                        : 'загрузить ленту фотографий',
            },
            propsBtnUp: {
                className: 'button-move-top',
                children: <img src={ImgUp} className='arrow' />,
            },
            propsNavVisible: photos.list.length > 0 ? 'block' : 'none',
            propsBtnDown: {
                className: 'button-move-bottom',
                children: <img src={ImgDown} className='arrow' />,
            },
        },
        isBusy: photos.state || lp.state,
        showBusy: {
            size: 'small',
            className: 'loading-small',
        },
        selectedPhoto,
        collections: {},
        liked: {
            tripleFeedLiked,
            propsNextPhotos:
                lp.list.length == user.json.total_likes
                    ? null
                    : {
                          className:
                              lp.list.length > 0
                                  ? 'button-next-photos'
                                  : 'button-first-photos',
                          onClick: onListLikedPhotos,
                          data: {
                              likedPhotos: lp,
                              unsplash,
                              username: user.json.username,
                          },
                          children:
                              lp.list.length > 0
                                  ? 'загрузить еще лайки'
                                  : 'загрузить ленту лайков',
                      },
            propsBtnUp: {
                className: 'button-move-top',
                children: <img src={ImgUp} className='arrow' />,
            },
            propsNavVisible: photos.list.length > 0 ? 'block' : 'none',
            propsBtnDown: {
                className: 'button-move-bottom',
                children: <img src={ImgDown} className='arrow' />,
            },
        },
    };

    return {
        propsAuth,
        showAuth,
        isBusy,
        showBusy,
        propsContent,
        doContinueLogIn,
        propsLogIn,
        authSecond,
    };
};
