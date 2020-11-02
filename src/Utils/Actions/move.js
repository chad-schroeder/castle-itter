import store from '../../store';

const { tiles } = store.getState().map;

export const getLocaleUnits = location => {
    return tiles
        .filter(tile => tile.location === location && tile.unit)
        .map(tile => tile.unit);
};

const getValidUnits = (activeUnit, units) => {
    return units.filter(unit => 
        unit.id !== activeUnit &&
        !unit.exhausted && 
        !unit.tokens.tookAction && 
        !unit.tokens.commanded && 
        !unit.tokens.disrupted);
};

export const validateMoveWithin = location => {
    const units = getLocaleUnits(location);
    const validUnits = getValidUnits(units);

    if (validUnits) {
        console.log('Valid units', validUnits);
    }
};

export const actionMoveWithin = (tile = 'K3') => {
    const { id, location, unit } = tile;

    // get all valid units at location
    // const validUnits = getValidLocaleUnits(location)

    // display valid units

    // get selected tile
    const selectedTile = 'K4';
    const selectedUnit = selectedTile.unit;

    // swap units

};
