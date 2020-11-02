import store from '../../store';

const { tiles, locations } = store.getState().map;

export const getVacantTiles = () => {
    const vacant = tiles
        .filter(tile => !tile.unit)
        .map(tile => tile.id);
    return vacant;
};

export const getLocationTiles = locationId => {
    const { tiles } = locations.find(location => location.id === locationId);
    return tiles;
};

export const getLineOfSight = tileId => {
    const los = tiles.find(tile => tile.id === tileId).los;
    return los;
};

export const destroyBesottenJenny = () => {
    const casualties = [];

    const payloadTiles = tiles.map(tile => {
        if (tile.location === 'BJ') {
            if (tile.unit) {
                casualties.push(tile.unit);
            }

            return { ...tile, destroyed: true };
        }
        return tile;
    });

    store.dispatch({ type: 'UPDATE_TILES', payload: payloadTiles });
    store.dispatch({ type: 'DESTROY_BESOTTEN_JENNY', payload: casualties });
};
