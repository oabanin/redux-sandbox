import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

const Counter = (props) => {
    const { counter, dec, inc, rnd } = props;
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button onClick={dec} className="btn btn-primary btn-large">DEC</button>
            <button onClick={inc} className="btn btn-primary btn-large">INC</button>
            <button onClick={rnd} className="btn btn-primary btn-large">RND</button>
        </div>)
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mapDispatchToProps = (dispatch) => {
    const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
    return { inc, dec, rnd }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);