import store from '../../store';

export const moveFriendly = (unitId, fromTileId, toTileId) => {
    const tiles = store.getState().map.tiles;
    const { allies } = store.getState().units;

    const { location } = tiles.find(tile => tile.id === toTileId);
    const unit = allies.find(unit => unit.id === unitId);

    console.log('moveFriendly', location, unit);

    store.dispatch({
        type: 'UPDATE_TILES',
        payload: {
            unitId,
            fromTileId,
            toTileId,
        },
    });

    store.dispatch({ 
        type: 'UPDATE_ALLY', 
        payload: {
            ...unit,
            tile: toTileId,
            location,
        },
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
