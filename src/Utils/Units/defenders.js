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

export const getEligibleCommand = commander => {
    const { defenders } = store.getState().units;

    const { id, location } = commander;

    const eligible = defenders.filter(defender => 
            defender.id !== id
            && defender.location === location // units must be in the same location
            && (defender.exhausted || defender.disrupted) 
            && !defender.command // units with command attribute cannot be commanded
        );

    return eligible;
};

