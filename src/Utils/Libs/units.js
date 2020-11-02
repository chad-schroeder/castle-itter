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

export const eliminateUnit = unitId => {
    // update unit status to KIA
    const payloadAllies = allies.map(unit => {
        if (unit.id === unitId) {
            return { ...unit, kia: true }
        }
        return unit;
    });

    // remove unit from tile
    const payloadTiles = tiles.map(tile => {
        if (tile.unit === unitId) {
            return { ...tile, unit: null, }
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
