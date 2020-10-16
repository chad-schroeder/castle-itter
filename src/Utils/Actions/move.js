import store from '../../store';

export const moveLocation = (unitId, fromTileId, toTileId) => {
    // remove unit from current tile
    store.dispatch({ type: 'REMOVE_UNIT', payload: fromTileId });

    // move unit to new tile
    store.dispatch({ type: 'ADD_UNIT', payload: { id: toTileId, unit: unitId } });
};
