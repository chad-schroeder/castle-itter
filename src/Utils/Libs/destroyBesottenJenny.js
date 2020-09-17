import store from '../../store';

const destroyBesottenJenny = () => {
    const tiles = store.getState().map.tiles;

    const destroyed = tiles.map(tile => {
        if (tile.location === 'BJ') {
            return {
                ...tile,
                destroyed: true,
            };
        }
        return tile;
    });

    return destroyed;
};

export default destroyBesottenJenny;
