import { UPDATE} from './actions';

export const createUpdate = (bitcoin, ethereum) => ({
    type: UPDATE,
    bitcoin,
    ethereum,
});

export const updateAsync = (dispatch) => {
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=2").then( res => res.json()).then( json => {
        dispatch(createUpdate(json[0]), json[1]);
    });
};