import store from '../../store';

import { canTakeAction } from './checks';

export const deployUnit = (unit, toTileId) => {
    const { tiles } = store.getState().map;

    const tile = tiles.find(tile => tile.id === toTileId);
    const { 
        id: tileId,
        location, 
        los = null,
        armament = 0,
    } = tile;

    let { attack, suppress } = unit;

    if (unit.tanker && armament) {
        attack = armament.attack;
        suppress = armament.suppress;
    }

    return {
        ...unit,
        attack,
        suppress,
        tileId,
        location,
        los,
        armament,
    };
};

export const getSwapDefenders = (id, location) => {
    const { defenders } = store.getState().units;
    
    // const swapAllies = allies.filter(unit => unit.id !== id && unit.location === location && unit.activated && canTakeAction(unit));
    const locationDefenders = defenders.filter(unit => unit.id !== id && unit.location === location && unit.activation && canTakeAction(unit));

    console.log('defenders', locationDefenders);

    return locationDefenders;
};
