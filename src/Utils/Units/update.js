import store from '../../store';
import { canEscape } from '../Units/checks';

export const toggleToken = (unit, token) => {
    store.dispatch({ 
        type: 'TOGGLE_TOKEN', 
        payload: {
            [unit.id]: {
                ...unit,
                tokens: {
                    ...unit.tokens,
                    [token]: !unit.tokens[token],
                },
            },
        }
    });
};

export const toggleExhaustion = unit => {
    const payload = {
        [unit.id]: {
            ...unit,
            exhausted: !unit.exhausted,
        },
    };

    store.dispatch({ type: 'TOGGLE_EXHAUSTION', payload });
};

export const toggleCasualty = unit => {
    const payload = {
        [unit.id]: {
            ...unit,
            casualty: !unit.casualty,
        },
    };

    store.dispatch({ type: 'TOGGLE_CASUALTY', payload });
};

export const toggleEscape = unit => {
    canEscape(unit);
    console.log('clicked: toggleEscape');
};