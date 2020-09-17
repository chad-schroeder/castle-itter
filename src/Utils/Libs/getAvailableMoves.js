import store from '../../store';

const getAvailableMoves = () => {
    const tiles = store.getState().map.tiles;

    return tiles
        .filter(tile => tile.unit === null && !tile.destroyed)
        .map(tile => tile.id);

    // TODO: 
    // when prisoners can move
    // filter for Move and Moving Between Location
};

export default getAvailableMoves;
