import { connect } from 'react-redux';
import Content from '../components/Content';
import {updateAsync} from '../actions/actionCreators';

const mapStateToProps = (state) => ({
    bitcoin: state.bitcoin.price_usd,
    ethereum: state.ethereum.price_usd,
});

const mapDispatchToProps = (dispatch) => ({
    update: () => {
        dispatch(updateAsync());
    }
});

const ConContent = connect( mapStateToProps, mapDispatchToProps )(Content);

export default ConContent;