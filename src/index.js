//const initialState = 0;

import { createStore } from 'redux';

const reducer = (state = 0, action) => {

    // if(state === undefined) {
    //     return 0;
    // }


    // if(action.type === 'INC'){
    //     return state + 1;
    // }

    switch (action.type) {
        case 'INC':
            return state + 1;

        case 'DEC':
            return state - 1;

        default:
            return state;
    }
};

// let state = reducer(undefined, {});

// state = reducer(state, {type : 'INC'});
// state = reducer(state, {type : 'INC'});
// console.log(state);

const store = createStore(reducer);


// store.subscribe(()=>{
//     console.log(store.getState()) 
// })


//console.log(store.getState())
// store.dispatch({type: 'INC'})
// store.dispatch({type: 'INC'})
//console.log(store.getState())

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch({ type: 'DEC' })
});

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch({ type: 'INC' })
});

const update = () => {
    document
        .getElementById('counter')
        .innerHTML = store.getState()
};

store.subscribe(update);