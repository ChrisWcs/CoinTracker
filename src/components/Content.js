import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Content extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.update();
    }

    render(){
        return(
            <div>
                <h1>Bitcoin : USD : {this.props.bitcoin}</h1>
                <h1>Ethereum : USD : {this.props.ethereum}</h1>
            </div>
        );
    }
}

Content.propTypes = {
    bitcoin: PropTypes.string,
    ethereum: PropTypes.string,
    update: PropTypes.func,
};

export default Content;