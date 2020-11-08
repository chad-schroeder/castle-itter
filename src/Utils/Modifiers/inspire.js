import store from '../../store';

const { tiles } = store.getState().map;
const { allies } = store.getState().units;

const inspire = (tileId, location, unitId) => {
    // if location is the cellar, return
    if (location === 'C') return;
    
    // find all friendlies at location
    const units = tiles
        .filter(tile => 
            tile.unit && 
            tile.location === location && 
            tile.unit !== unitId)
        .map(tile => tile.unit);

    // iterate through units at location
    for (let unit in units) {
        const ally = allies[unit];

        // if unit with inspire is at location and able to inspire, return true
        if (ally.inspire && !ally.exhausted && !ally.tokens.includes('disrupted')) {
            return true;
        }
    }

    return false;
};

export default inspire;
