import records from '../../lib/records.js';
import { VERSION } from '../../lib/constants.js';

let init = {
    user: {
        isLogged: false,
        state: false,
        token: '',
        name: '',
        error: {},
        code: '',
        json: {},
    },
    photos: {
        state: false,
        page: 0,
        time: 0,
        list: [],
        error: {},
        likedPhotosId: [],
        jsonLike: {},
    },
};

const initStore = records.getRecord(`diplomaSimple${VERSION}`);
init = initStore !== null ? initStore : init;
records.setRecord(`diplomaSimple${VERSION}`, init);

export default init;
