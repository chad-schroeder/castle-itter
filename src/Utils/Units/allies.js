import store from '../../store';

import { canTakeAction } from './checks';

export const getSwapAllies = (id, location) => {
    const { allies } = store.getState().units;
    
    // const swapAllies = allies.filter(unit => unit.id !== id && unit.location === location && unit.activated && canTakeAction(unit));
    const locationAllies = allies.filter(unit => unit.id !== id && unit.location === location && unit.activated && canTakeAction(unit));

    console.log('locationAllies', locationAllies);

    return locationAllies;
};
