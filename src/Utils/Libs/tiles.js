import store from '../../store';

export const determineStatusColor = ({ location, unit }) => {
    if (location === 'D' || location === 'R') return 'neutral';
    if (location === 'C') return 'notice';
    if (unit) return 'info';
    return 'positive';
};

export const getMoveTiles = () => {
    const tiles = store.getState().map.tiles;
    return tiles.filter(tile => !tile.unit && tile.movement);
};

export const getVacantTiles = () => {
    const tiles = store.getState().map.tiles;
    const vacant = tiles.filter(tile => !tile.unit);
    return vacant;
};

export const getLocationTiles = locationId => {
    const locations = store.getState().map.locations;
    const { tiles } = locations.find(location => location.id === locationId);
    return tiles;
};

export const getLineOfSight = tileId => {
    const tiles = store.getState().map.tiles;
    const los = tiles.find(tile => tile.id === tileId).los;
    return los;
};

// export const destroyBesottenJenny = () => {
//     const tiles = store.getState().map.tiles;
//     const casualties = [];

//     const payloadTiles = tiles.map(tile => {
//         if (tile.location === 'BJ') {
//             if (tile.unit) {
//                 casualties.push(tile.unit);
//             }

//             return { ...tile, destroyed: true };
//         }
//         return tile;
//     });

//     store.dispatch({ type: 'UPDATE_TILES', payload: payloadTiles });
//     store.dispatch({ type: 'DESTROY_BESOTTEN_JENNY', payload: casualties });
// };
