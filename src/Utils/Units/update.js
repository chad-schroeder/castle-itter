import store from '../../store';

export const removeOrdered = unitId => {
    const unit = store.getState().units.allies[unitId];

    const payload = {
        [unitId]: {
            ...unit,
            tokens: {
                ...unit.tokens,
                ordered: false,
            },
        },
    };

    store.dispatch({ type: 'REMOVE_ORDERED', payload });
};

export const removeDisruption = unitId => {
    const unit = store.getState().units.allies[unitId];

    const payload = {
        [unitId]: {
            ...unit,
            tokens: {
                ...unit.tokens,
                disrupted: false,
            },
        },
    };

    store.dispatch({ type: 'REMOVE_DISRUPTION', payload });
};

export const removeCommanded = unitId => {
    const unit = store.getState().units.allies[unitId];

    const payload = {
        [unitId]: {
            ...unit,
            tokens: {
                ...unit.tokens,
                commanded: false,
            },
        },
    };

    store.dispatch({ type: 'REMOVE_COMMANDED', payload });
};

export const removeExhaustion = unitId => {
    const unit = store.getState().units.allies[unitId];

    const payload = {
        [unitId]: {
            ...unit,
            exhausted: false,
        },
    };

    store.dispatch({ type: 'REMOVE_EXHAUSTION', payload });
};
