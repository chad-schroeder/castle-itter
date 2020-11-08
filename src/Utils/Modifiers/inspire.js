import store from '../../store';

const tiles = store.getState().map.tiles;
const { allies } = store.getState().units;

const inspire = (tileId) => {
    // get location of tile
    const location = tiles.find(tile => tile.id === tileId).location;

    // if tile is in the cellar, return
    if (location === 'C') return;
    
    // find all units in same location as tile
    const units = tiles
        .filter(tile => tile.unit && tile.location === location)
        .map(tile => tile.unit);

    // check if unit with inspire is in a tile within location
    // TODO: ensure it is not the same unit that is inspiring
    // const inspired = allies.some(unit => 
    //     units.includes(unit.id) &&
    //     unit?.modifiers?.inspire &&
    //     !unit.casualty &&
    //     !unit.exhausted &&
    //     !unit.tokens.disrupted
    // );

    // return inspired;
    return;
};

export default inspire;
