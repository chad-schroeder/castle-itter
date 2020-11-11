import { exhaustUnit } from 'Utils/Libs/units';

import store from '../../store';

const { tiles } = store.getState().map;

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
export const actionMove = (movingUnitId, staticUnitId, toTileId, fromTileId) => {
    // swap tiles from where unit is moving from and to
    const payloadTiles = swapUnitTiles(movingUnitId, staticUnitId, toTileId, fromTileId);

    store.dispatch({ type: 'UPDATE_TILES', payload: payloadTiles });
    
    // update unit to exhausted and add 'action' token
    exhaustUnit(movingUnitId);
};

// get all units at location
export const getLocaleUnits = location => {
    return tiles
        .filter(tile => tile.location === location && tile.unit)
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
