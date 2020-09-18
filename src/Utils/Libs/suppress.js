import store from '../../store';

const suppress = (tileId) => {
    const tiles = store.getState().map.tiles;
    const los = tiles.find(tile => tile.id === tileId).los;
    console.log(typeof los);
    return los;
};

export default suppress;
