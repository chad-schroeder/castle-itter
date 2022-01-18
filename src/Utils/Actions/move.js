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
