import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';

import { createStore, bindActionCreators } from 'redux';
// import * as actions from './actions';

import reducer from './reducer';

const store = createStore(reducer);
// const { dispatch } = store;

// const { inc, dec, rnd } = bindActionCreators(actions, dispatch)


// document.getElementById('dec').addEventListener('click', dec);
// document.getElementById('inc').addEventListener('click', inc);
// document.getElementById('rnd').addEventListener('click', () => {
//     const payload = Math.floor(Math.random() * 10);
//     rnd(payload);
// });


    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
, document.getElementById('root'));

        // <Counter
        //     counter={store.getState()}
        //     inc={inc}
        //     dec={dec}
        //     rnd={() => {
        //         const payload = Math.floor(Math.random() * 10);
        //         rnd(payload);
        //     }} />

// update(update);
// store.subscribe(update);

