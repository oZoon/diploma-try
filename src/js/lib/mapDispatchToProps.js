import { logIn, continueLogIn, logOut } from '../core/actions/user';
import { listPhotos, likePhoto } from '../core/actions/photos';
import { listLikedPhotos, likedLikePhoto } from '../core/actions/likedPhotos';

export default dispatch => ({
    onLogIn: data => dispatch(logIn(data)),
    doContinueLogIn: data => dispatch(continueLogIn(data)),
    onLogOut: history => dispatch(logOut(history)),
    onListPhotos: data => dispatch(listPhotos(data)),
    onLikePhoto: data => dispatch(likePhoto(data)),
    onListLikedPhotos: data => dispatch(listLikedPhotos(data)),
    // onLikedLikePhoto: data => dispatch(likedLikePhoto(data)),
});
