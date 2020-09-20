import store from '../../store';

const tiles = store.getState().map.tiles;
const friendlies = store.getState().units.friendly.units;

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
    const inspired = friendlies.some(combatant => 
        units.includes(combatant.id) && 
        combatant?.modifiers?.inspire && 
        !combatant.exhausted && 
        !combatant.tokens.disrupted
    );

    return inspired;
};

export default inspire;
