import store from '../../store';

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

export const setCasualty = unitId => {
    const unit = store.getState().units.allies[unitId];

    const payload = {
        [unitId]: {
            ...unit,
            casualty: true,
        },
    };

    store.dispatch({ type: 'SET_CASUALTY', payload });
};
