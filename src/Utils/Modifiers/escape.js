import store from '../../store';

const tiles = store.getState().map.tiles;
const friendlies = store.getState().units.friendly.units;

export const escape = () => {

};

export const canEscape = (tileId) => {
    // borotra cannot escape from the Cellar of Great Hall
    if (tileID !== 'C' || tileId !== 'GH') {
        // determine which enemy entry tiles are vacant
        // for this example, all are vacant
        const vacancies = true;

        // get boratra
        const boratra = friendlies.find(unit => unit.id === 'borotra');

        if (!boratra.exhausted) {
            
        }

        return false;
    }

    return false;
};