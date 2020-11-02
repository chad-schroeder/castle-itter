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
