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
            !unit.casualty &&
            !unit.exhausted &&
            !unit.tokens.tookAction &&
            !unit.tokens.commanded &&
            !unit.tokens.disrupted)
        .map(unit => unit.id);
    return actionable;
};

export const eliminateUnits = units => {
    // update casualties
    const payloadAllies = allies.map(unit => {
        if (units.includes(unit.id)) {
            return { ...unit, casualty: true };
        }
        return unit;
    });

    // remove units from tiles
    const payloadTiles = tiles.map(tile => {
        if (units.includes(tile.unit)) {
            return { ...tile, unit: null };
        }
        return tile;
    });

    store.dispatch({ type: 'UPDATE_ALLIES', payload: payloadAllies });
    store.dispatch({ type: 'UPDATE_TILES', payload: payloadTiles });
};

export const getTargetsByColor = color => {
    const colors = store.getState().map.colors;
    return colors[color];
};
