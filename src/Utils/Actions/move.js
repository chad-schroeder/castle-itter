import store from '../../store';

export const moveFriendly = (unitId, fromTileId, toTileId) => {
    const tiles = store.getState().map.tiles;
    const unit = store.getState().units.allies[unitId];

    // if next tile already contains a unit, cancel move
    const newTile = tiles.find(tile => tile.id === toTileId);
    if (newTile.unit) return;

    const updatedTiles = tiles.map(tile => {
        if (tile.id === fromTileId) {
            return {
                ...tile,
                unit: null,
            }
        } else if (tile.id === toTileId) {
            return {
                ...tile,
                unit: unitId,
            }
        }
        return tile;
    });

    store.dispatch({
        type: 'UPDATE_TILES',
        payload: updatedTiles,
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

export const swapFriendly = (firstUnit, secondUnit) => {
    const tiles = store.getState().map.tiles;

    const updatedTiles = tiles.map(tile => {
        if (tile.unit === firstUnit.id) {
            return {
                ...tile,
                unit: secondUnit.id,
            }
        } else if (tile.unit === secondUnit.id) {
            return {
                ...tile,
                unit: firstUnit.id,
            }
        }
        return tile;
    });

    store.dispatch({
        type: 'UPDATE_TILES',
        payload: updatedTiles,
    });

    store.dispatch({ 
        type: 'UPDATE_ALLIES', 
        payload: {
            [firstUnit.id]: {
                ...firstUnit,
                tile: secondUnit.tile,
            },
            [secondUnit.id]: {
                ...secondUnit,
                tile: firstUnit.tile,
            },
        }
    });
};
