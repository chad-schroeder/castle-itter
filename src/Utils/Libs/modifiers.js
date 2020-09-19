import store from '../../store';

const locations = store.getState().map.locations;
const tiles = store.getState().map.tiles;
const friendlies = store.getState().units.friendly.units;

export const inspire = (tileId) => {
    // get location of tile
    const location = tiles.find(tile => tile.id === tileId).location;

    // if tile is in the cellar, return
    if (location === 'C') return;
    
    // find all units in same location as tile
    const units = tiles
        .filter(tile => tile.unit && tile.location === location)
        .map(tile => tile.unit);

    // check if unit with inspire is in a tile within location
    const inspired = friendlies.some(combatant => units.includes(combatant.id) && combatant?.modifiers?.inspire);

    return inspired;
};

export const morale = (tileId) => {
    // get location of tile
    const location = tiles.find(tile => tile.id === tileId).location;

    // find all units in same location as tile
    const units = tiles
        .filter(tile => tile.unit && tile.location === location)
        .map(tile => tile.unit);
    console.log('morale units', units);

    // check if unit with the officer modifier is within location
    const officer = friendlies.some(unit => units.includes(unit.id) && unit?.modifiers?.officer);
    console.log('officer', officer);

    const fled = friendlies.filter(unit => units.includes(unit.id) && unit?.modifiers?.morale);
    console.log('fled', fled);

    return officer;
};
