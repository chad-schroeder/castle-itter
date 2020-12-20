import { exhaustUnit } from 'Utils/Libs/units';

import store from '../../store';

const { tiles, tracks } = store.getState().map;
const { allies } = store.getState().units;

// get all vacant tiles
export const getOpenTiles = () => {
    return tiles
        .filter(tile => !tile.unit)
        .map(tile => tile.id);
};

// move unit(s) from old tile to new tile
const swapUnitTiles = (movingUnitId, staticUnitId = null, toTileId, fromTileId) => {
    const updatedTiles = tiles.map(tile => {
        // add moving unit to new tile
        if (tile.id === toTileId) {
            return { ...tile, unit: movingUnitId };
        }

        // swap in static unit or set to null
        if (tile.id === fromTileId) { 
            return { ...tile, unit: staticUnitId };
        }

        return tile;
    });
    
    return updatedTiles;
};

// Action: move location, move within
// export const actionMove = (movingUnitId, staticUnitId, toTileId, fromTileId) => {
//     // swap tiles from where unit is moving from and to
//     const payloadTiles = swapUnitTiles(movingUnitId, staticUnitId, toTileId, fromTileId);

//     store.dispatch({ type: 'UPDATE_TILES', payload: payloadTiles });
    
//     // update unit to exhausted and add 'action' token
//     exhaustUnit(movingUnitId);
// };

// get all units at location
export const getLocaleUnits = (location, skipId = null) => {
    return tiles
        .filter(tile => tile.location === location && tile.unit && tile.unit !== skipId)
        .map(tile => tile.unit);
};

// get all units from list that can move
export const getValidUnits = (activeUnit, units) => {
    return units.filter(unit => 
        unit.id !== activeUnit &&
        !unit.exhausted && 
        !unit.tokens.tookAction && 
        !unit.tokens.commanded && 
        !unit.tokens.disrupted);
};

export const actionMove = (unitId, openTiles) => {
    // highlight all open tiles
    // listen for selection
    // finalize move action
};

export const canMove = () => {
    // TODO: determine if unit is in cellar or moving from cellar
    const openTiles = getOpenTiles();
    if (openTiles.length) {
        return true;
    }
    return false;
};


export const canMoveWithin = (location, skipId) => {
    const localeUnits = getLocaleUnits(location, skipId);
    const units = [];

    if (localeUnits) {
        Object.keys(allies).forEach(ally => {
            const unit = allies[ally];

            if (
                localeUnits.includes(unit.id) && 
                !unit.exhausted &&
                !unit.tokens.commanded &&
                !unit.tokens.disrupted && 
                !unit.tokens.ordered
            ) {
                units.push(unit.id);
            }
        });
    }

    return units;
};

export const canEscape = (los = []) => {
    // check each track within line of sight for counters
    for (let color of los) {
        console.log('canEscape color', color);

        const counters = [];

        for (let track in tracks) {
            console.log(tracks[track]);

            if (tracks[track].los === color && tracks[track].counter) {
                counters.push(track);
            }
        }

        console.log('counters', counters);

        if (!counters.length) {
            // if any los track is devoid of counters, unit can escape
            return true;
        }
    }
        
    return false;
};
