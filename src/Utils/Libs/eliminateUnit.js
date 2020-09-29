import store from '../../store';

export const eliminateUnit = unitId => {
    const { allies } = store.getState().units;
    const { tiles } = store.getState().map;

    // set unit to KIA
    const payloadAllies = allies.map(unit => {
        if (unit.id === unitId) {
            return { ...unit, kia: true }
        }
        return unit;
    })

    // update allies state
    store.dispatch({ type: 'UPDATE_ALLIES', payload: payloadAllies });

    // remove unit kia from tile
    const payloadTiles = tiles.map(tile => {
        if (tile.unit === unitId) {
            return { ...tile, unit: null, }
        }
        return tile;
    });

    // update tiles state
    store.dispatch({ type: 'UPDATE_TILES', payload: payloadTiles });
};
