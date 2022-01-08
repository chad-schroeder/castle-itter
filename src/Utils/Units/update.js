import store from '../../store';
import { canEscape } from '../Units/checks';

export const toggleOrdered = id => {
    store.dispatch({ type: 'TOGGLE_ORDERED', payload: id });
};

export const toggleDisrupted = id => {
    store.dispatch({ type: 'TOGGLE_DISRUPTED', payload: id });
};

export const toggleCommanded = id => {
    store.dispatch({ type: 'TOGGLE_COMMANDED', payload: id });
};

export const toggleExhaustion = id => {
    store.dispatch({ type: 'TOGGLE_EXHAUSTION', payload: id });
};

export const toggleCasualty = id => {
    store.dispatch({ type: 'TOGGLE_CASUALTY', payload: id });
};

export const toggleEscape = unit => {
    if (canEscape(unit))  {
        console.log('escaped!');
    }
};