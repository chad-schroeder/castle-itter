import store from '../../store';

const { tiles } = store.getState().map;
const { units } = store.getState().units;

const getLocationUnits = location => {
    const units = tiles
        .filter(tile => tile.location === location && tile.unit)
        .map(tile => tile.unit);
    return units;
};

const getValidUnits = units => {
    const validUnits = units.filter(unit => !unit.exhausted && !unit.tokens.disrupted);
    return validUnits;
};

export const validateMoveWithin = (location) => {
    const locationUnits = getLocationUnits(location);
    const validUnits = getValidUnits(locationUnits);

    if (validUnits) {
        console.log('Valid units', validUnits);
    }
};

export const dispatchMoveWithin = (inactiveTile, activeTile, inactiveUnit, activeUnit) => {
    // add inactive unit to active tile
    store.dispatch({ type: 'ADD_UNIT', payload: { id: activeTile, unit: inactiveUnit } });

    // add active unit to inactive tile
    store.dispatch({ type: 'ADD_UNIT', payload: { id: inactiveTile, unit: activeUnit } });
};

export const dispatchMoveLocation = (unitId, fromTile, toTile) => {
    // remove unit from current tile
    store.dispatch({ type: 'REMOVE_UNIT', payload: fromTile });

    // add unit to new tile
    store.dispatch({ type: 'ADD_UNIT', payload: { id: toTile, unit: unitId } });
};
