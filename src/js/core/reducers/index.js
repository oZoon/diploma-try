import init from './init';
import user from './user';
import photos from './photos';
import likedPhotos from './likedPhotos';

export default (state = init, action) => {
    return {
        user: user(state.user, action),
        photos: photos(state.photos, action),
        likedPhotos: likedPhotos(state.likedPhotos, action),
    };
};
