import { createStore, bindActionCreators } from 'redux';
import { inc, dec, rnd } from './actions';
import reducer from './reducer';

const store = createStore(reducer);
const { dispatch } = store;

const incDispatch = bindActionCreators(inc, dispatch)
const decDispatch = bindActionCreators(dec, dispatch)
const rndDispatch = bindActionCreators(rnd, dispatch)

document.getElementById('dec').addEventListener('click', decDispatch);
document.getElementById('inc').addEventListener('click', incDispatch);

document.getElementById('rnd').addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    rndDispatch(payload);
});

const update = () => {
    document
        .getElementById('counter')
        .innerHTML = store.getState()
};

store.subscribe(update);