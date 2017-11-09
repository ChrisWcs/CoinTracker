import { UPDATE} from './actions';

export const createUpdate = (bitcoin, ethereum) => ({
    type: UPDATE,
    bitcoin,
    ethereum,
});

export const updateAsync = (dispatch) => {

};