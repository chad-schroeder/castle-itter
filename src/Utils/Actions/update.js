import store from '../../store';

export const removeDisruption = (allies, unitId) => {
    const unit = allies[unitId].tokens.disrupted = false;

    store.dispatch({ type: 'REMOVE_DISRUPTION', payload: unit });
};

export const removeExhaustion = (allies, unitId) => {
    const unit = allies[unitId].tokens.exhausted = false;

    store.dispatch({ type: 'REMOVE_EXHAUSTION', payload: unit });
};
