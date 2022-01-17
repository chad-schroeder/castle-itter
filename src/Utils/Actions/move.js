import store from '../../store';

export const moveDefender = (unit, toTileId) => {
    const tiles = store.getState().map.tiles;

    // get tile properties
    const { tile: tileId, location, los } = tiles.find(tile => tile.id === toTileId);

    const updatedUnit = {
        ...unit,
        tileId,
        location,
        los,
        ordered: true,
        exhausted: true,
    }

    store.dispatch({
        type: 'UPDATE_DEFENDER', 
        payload: updatedUnit,
    });
};

// export const swapFriendly = (firstUnit, secondUnit) => {
//     const tiles = store.getState().map.tiles;

//     const updatedTiles = tiles.map(tile => {
//         if (tile.unit === firstUnit.id) {
//             return {
//                 ...tile,
//                 unit: secondUnit.id,
//             }
//         } else if (tile.unit === secondUnit.id) {
//             return {
//                 ...tile,
//                 unit: firstUnit.id,
//             }
//         }
//         return tile;
//     });

//     store.dispatch({
//         type: 'UPDATE_TILES',
//         payload: updatedTiles,
//     });

//     store.dispatch({ 
//         type: 'UPDATE_DEFENDERS', 
//         payload: {
//             [firstUnit.id]: {
//                 ...firstUnit,
//                 tile: secondUnit.tile,
//             },
//             [secondUnit.id]: {
//                 ...secondUnit,
//                 tile: firstUnit.tile,
//             },
//         }
//     });
// };
