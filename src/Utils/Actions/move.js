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

export const swapFriendly = (firstUnitId, secondUnitId) => {
    const tiles = store.getState().map.tiles;
    const allies = store.getState().units.allies;
    const firstUnit = allies[firstUnitId];
    const secondUnit = allies[secondUnitId];

    const updatedTiles = tiles.map(tile => {
        if (tile.unit === firstUnitId) {
            return {
                ...tile,
                unit: secondUnitId,
            }
        } else if (tile.unit === secondUnitId) {
            return {
                ...tile,
                unit: firstUnitId,
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
                exhausted: true,
                tile: secondUnit.tile,
            },
            [secondUnit.id]: {
                ...secondUnit,
                exhausted: true,
                tile: firstUnit.tile,
            },
        }
    });
};
