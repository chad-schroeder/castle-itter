import store from '../../store';

const { tiles } = store.getState().map;
const { allies } = store.getState().units;

export const getLocationUnits = locationId => {
    const units = tiles
        .filter(tile => tile.location === locationId && tile.unit)
        .map(tile => tile.unit);
    return units;
};

export const getActionableUnits = (list, skipId) => {
    
};

export const eliminateUnits = units => {
   
};

export const getTargetsByColor = color => {
    const colors = store.getState().map.colors;
    return colors[color];
};
