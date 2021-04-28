import { logIn, continueLogIn, logOut } from '../core/actions/user.js';
import { listPhotos, likePhoto, unLikePhoto } from '../core/actions/photos.js';

export default dispatch => ({
    onLogIn: data => dispatch(logIn(data)),
    doContinueLogIn: data => dispatch(continueLogIn(data)),
    onLogOut: history => dispatch(logOut(history)),
    onListPhotos: data => dispatch(listPhotos(data)),
    onLikePhoto: data => dispatch(likePhoto(data)),
    onUnLikePhoto: data => dispatch(unLikePhoto(data)),
});
