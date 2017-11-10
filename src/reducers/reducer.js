import initialState from './initialState';
import { UPDATE } from '../actions/actions';

const reducer = (state = initialState(), action) => {
    switch(action.type){
        case UPDATE:
            return {
                bitcoin: action.bitcoin,
                ethereum: action.ethereum,
            };
        default:
            return state;
    }
};

export default reducer;
