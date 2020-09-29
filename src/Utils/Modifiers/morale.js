import store from '../../store';

const { tiles } = store.getState().map;
const { allies } = store.getState().units;

const morale = (tileId) => {
    // get location of tile
    const location = tiles.find(tile => tile.id === tileId).location;

    // find all units in same location as tile
    const units = tiles
        .filter(tile => tile.unit && tile.location === location)
        .map(tile => tile.unit);
    console.log('morale units', units);

    // check if unit with the officer modifier is within location
    const officer = allies.some(unit => units.includes(unit.id) && unit?.modifiers?.officer);
    console.log('officer', officer);

    const fled = allies.filter(unit => units.includes(unit.id) && unit?.modifiers?.morale);
    console.log('fled', fled);

    return officer;
};

export default morale;
