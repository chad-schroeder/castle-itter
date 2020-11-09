import store from '../../store';

const { tiles } = store.getState().map;
const { allies } = store.getState().units;

// get unit stats
export const getUnit = unitId => allies[unitId];

// verify unit can take an action
export const canTakeAction = unitId => {
    const unit = allies[unitId];

    if (unit.exhausted || unit.tokens.length) {
        return false;
    }

    return true;
};

export const getLocationUnits = (locationId, skipId = null) => {
    console.log('getLocationUnits', { locationId, skipId });

    const units = tiles
        .filter(tile => 
            tile.unit &&
            tile.unit !== skipId &&
            tile.location === locationId)
        .map(tile => tile.unit);
    return units;
};

export const getActionableUnits = (list, skipId = null) => {
    const units = list
        .filter(unit => 
            !unit.exhausted && 
            !unit.tokens.length && 
            !unit.tokens.length && unit.id !== skipId
        );
    return units;
};

export const eliminateUnits = units => {
   
};

export const getTargetsByColor = color => {
    const colors = store.getState().map.colors;
    return colors[color];
};
