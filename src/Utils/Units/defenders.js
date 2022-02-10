import store from '../../store';

export const getDefenderById = id => {
    const { defenders } = store.getState().units;
    const defender = defenders.find(defender => defender.id === id);
    return defender;
};

export const phaseUnits = phase => {
    if (phase === 'Cellar') {
        store.dispatch({ type: 'PHASE_CELLAR' });
    }
    if (phase === 'Reinforcement') {
        store.dispatch({ type: 'PHASE_REINFORCEMENT' });
    }
};

