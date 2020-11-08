import store from '../../store';

const { tracks } = store.getState().map;
const { boratra } = store.getState().units.allies;

const getEmptyTrack = (color) => {
    const enemies = [];

    Object.keys(tracks).forEach(track => {
        if (track.los === color && (track.counter || track.suppress.length)) {
            enemies.push('enemy');
        }
    });

    return !enemies.length;
};

export const canEscape = (unitId, location, los) => {
    if (unitId !== 'boratra') return;

    // Borotra cannot escape from the Cellar of Great Hall
    if (location === 'C' || location === 'GH') return;

    // return if Boratra is not ready to escape
    if (boratra.exhausted || boratra.tokens.hasAction || boratra.tokens.commanded || boratra.tokens.disrupted) return;

    // check for empty track related to Boratra's present location
    for (let color in los) {
        const empty = getEmptyTrack(color);
         
        if (empty) {
            return true;
        }
    }

    // Boratra cannot escape
    return;
};

export const escape = (tileId) => {

};
