import store from '../../store';

import { canTakeAction } from './checks';

export const getSwapAllies = (id, location) => {
    const { allies } = store.getState().units;

    const locationAllies = [];
    Object.keys(allies).forEach(key => {
        const ally = allies[key];

        if (ally.id !== id && ally.location === location && ally.activated && canTakeAction(ally)) {
            locationAllies.push(ally);
        }
    });

    return locationAllies;
};
