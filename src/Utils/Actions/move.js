import store from '../../store';

export const moveFriendly = (unitId, fromTileId, toTileId) => {
    const unit = store.getState().units.allies[unitId];

    store.dispatch({ 
        type: 'REMOVE_UNIT', 
        payload: fromTileId,
    });

    store.dispatch({ 
        type: 'ADD_UNIT',
        payload: {
            tile: toTileId,
            unit: unitId,
        },
    });

    store.dispatch({ 
        type: 'UPDATE_ALLIES', 
        payload: {
            [unitId]: {
                ...unit,
                exhausted: true,
                tile: toTileId,
            },
        }
    });
};