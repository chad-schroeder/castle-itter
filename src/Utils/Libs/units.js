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
    const actionable = allies
        .filter(unit => 
            list.includes(unit.id) && 
            unit.id !== skipId &&
            !unit.kia &&
            !unit.exhausted &&
            !unit.tokens.tookAction &&
            !unit.tokens.commanded &&
            !unit.tokens.disrupted)
        .map(unit => unit.id);
    return actionable;
};
