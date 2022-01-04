import store from '../../store';
import { canEscape } from '../Units/checks';

export const toggleToken = (unitId, token) => {
    const unit = store.getState().units.allies[unitId];

    store.dispatch({ 
        type: 'TOGGLE_TOKEN', 
        payload: {
            [unitId]: {
                ...unit,
                tokens: {
                    ...unit.tokens,
                    [token]: !unit.tokens[token],
                },
            },
        }
    });
};

export const toggleExhaustion = unitId => {
    const unit = store.getState().units.allies[unitId];

    const payload = {
        [unitId]: {
            ...unit,
            exhausted: !unit.exhausted,
        },
    };

    store.dispatch({ type: 'TOGGLE_EXHAUSTION', payload });
};

export const toggleCasualty = unitId => {
    const unit = store.getState().units.allies[unitId];

    const payload = {
        [unitId]: {
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