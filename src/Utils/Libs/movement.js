import store from 'store';

export const getUnoccupiedTiles = () => {
    const { tiles } = store.getState().map;
    const { defenders } = store.getState().units;

    const occupied = defenders
        .filter(defender => defender.tile)
        .map(defender => defender.tile);

    const unoccupied = tiles.filter(tile => !occupied.includes(tile.id));

    return unoccupied;
};
