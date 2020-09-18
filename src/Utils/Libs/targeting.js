import store from '../../store';

const tiles = store.getState().map.tiles;

// getLineOfSight: get all los colors associated with tile
export const getLineOfSight = (tileId) => {
    const los = tiles.find(tile => tile.id === tileId).los;
    return los;
};
