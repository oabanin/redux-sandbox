import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';

import { createStore, bindActionCreators } from 'redux';
import * as actions from './actions';

import reducer from './reducer';

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch)


// document.getElementById('dec').addEventListener('click', dec);
// document.getElementById('inc').addEventListener('click', inc);
// document.getElementById('rnd').addEventListener('click', () => {
//     const payload = Math.floor(Math.random() * 10);
//     rnd(payload);
// });

const update = () => {
    // document
    //     .getElementById('counter')
    //     .innerHTML = store.getState()
};

store.subscribe(update);

ReactDOM.render (<Counter 
    counter={store.getState()}
    inc={inc}
    dec={dec}
    rnd={()=>{
    const payload = Math.floor(Math.random() * 10);
    rnd(payload);
    }}/>, document.getElementById('root'));