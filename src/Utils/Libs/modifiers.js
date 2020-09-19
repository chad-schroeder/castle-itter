import store from '../../store';

const locations = store.getState().map.locations;
const tiles = store.getState().map.tiles;
const friendlyUnits = store.getState().units.friendly.units;

export const inspire = (tileId) => {
    // get location of tile
    const location = tiles.find(tile => tile.id === tileId).location;
    console.log('location', location);

    // if tile is in the cellar, return
    if (location === 'C') return;
    
    // find all units in same location as tile
    const units = tiles
        .filter(tile => tile.unit && tile.location === location)
        .map(tile => tile.unit);
    console.log('units', units);

    // check if unit with inspire is in a tile within location
    const inspired = friendlyUnits.some(combatant => units.includes(combatant.id) && combatant?.modifiers?.inspire);
    console.log('inspired', inspired);

    return inspired;
};
