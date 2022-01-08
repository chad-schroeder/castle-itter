import store from '../../store';

import { canTakeAction } from './checks';

export const listAllies = () => {
    const allies = store.getState().units.allies;
    return Object.keys(allies).map(ally => allies[ally]);
};

// Return all units at location, including current tile unit
export const getLocationAllies = (tileId) => {
    const { locations, tiles } = store.getState().map;
    const { allies } = store.getState().units;

    // get location tiles
    const { location } = tiles.find(tile => tile.id === tileId);
    const locationTiles = locations[location]?.tiles || [];

    // get location allies
    const locationAllies = [];
    Object.keys(allies).forEach(key => {
        const ally = allies[key];

        if (locationTiles.includes(ally.tile)) {
            locationAllies.push(ally.id);
        }
    });
    
    return locationAllies;
};

// Return only units at location that can activate, excluding current tile unit
export const getValidLocationAllies = (unitId, tileId) => {
    const { allies } = store.getState().units;

    // find all units sharing the location
    const locationUnits = getLocationAllies(tileId);

    // filter to allies that can activate
    const validAllies = [];
    Object.keys(allies).forEach(key => {
        const ally = allies[key];

        if (locationUnits.includes(ally.id) && ally.id !== unitId && canTakeAction(ally)) {
            validAllies.push(ally);
        }
    });

    return validAllies;
};


