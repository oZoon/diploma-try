import records from "lib/records";
import { VERSION } from 'lib/constants';

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

let initStore = records.getRecord(`diplomaSimple${VERSION}`);
init = initStore !== null ? initStore : init;
records.setRecord(`diplomaSimple${VERSION}`, init);

export default init;
