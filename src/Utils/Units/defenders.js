import store from '../../store';

// import { canTakeAction } from './checks';

export const getDefenderById = id => {
    const { defenders } = store.getState().units;
    const defender = defenders.find(defender => defender.id === id);
    return defender;
};
