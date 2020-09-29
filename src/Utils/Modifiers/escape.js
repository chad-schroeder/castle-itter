import store from '../../store';

const tiles = store.getState().map.tiles;
const { allied } = store.getState().units;

export const canEscape = (tileId) => {
    // borotra cannot escape from the Cellar of Great Hall
    if (tileID !== 'C' || tileId !== 'GH') {
        // determine which enemy entry tiles are vacant
        // for this example, all are vacant
        const vacancies = true;

        // get boratra
        const boratra = { allied }.find(unit => unit.id === 'borotra');

        if (!boratra.exhausted) {
            
        }

        return false;
    }

    return false;
};
