import { logIn, continueLogIn, logOut } from '../core/actions/user';
import { listPhotos, likePhoto } from '../core/actions/photos';

export default dispatch => ({
    onLogIn: data => dispatch(logIn(data)),
    doContinueLogIn: data => dispatch(continueLogIn(data)),
    onLogOut: history => dispatch(logOut(history)),
    onListPhotos: data => dispatch(listPhotos(data)),
    onLikePhoto: data => dispatch(likePhoto(data)),
});
