import { shuffle } from 'Utils/Libs/deck';

import store from '../../store';

// 142nd Infantry Regiment card
const regimentCard = {
    id: '142nd',
    card: '142nd',
    type: '142nd',
    title: '142nd Infantry Regiment',
    text: 'End game immediately',
};

const cardCount = () => {
    const { deckLevel } = store.getState().common;

    let count = 9;

    if (deckLevel === 3) count = 6;
    if (deckLevel === 4) count = 4;

    return count;
};

const shuffleBottomCards = () => {
    const { deck } = store.getState().common;

    const count = cardCount();

    // get bottom cards
    const bottomCards = deck.splice(-count);

    // add 142nd into bottom cards and shuffle
    const shuffled = shuffle([...bottomCards, regimentCard]);

    // compile new deck
    const newDeck = [...deck, ...shuffled];

    store.dispatch({ type: 'BUILD_DECK', payload: newDeck });
    store.dispatch({ type: 'BOROTRA_ESCAPED' });
};

const removeUnitFromTile = (tileId) => {
    const { tiles } = store.getState().map;

    const payload = tiles.map(tile => {
        if (tile.id === tileId) {
            return { ...tile, unit: null }
        }
        return tile;
    });

    store.dispatch({ type: 'UPDATE_TILES', payload: payload });
};

const escapeBorotra = () => {
    const { allies } = store.getState().units;

    const payload = allies.map(ally => {
        if (ally.id === 'borotra') {
            return { ...ally, escaped: true }
        }
        return ally;
    });

    store.dispatch({ type: 'UPDATE_ALLIES', payload });
};

const escape = (tileId) => {
    const { escaped } = store.getState().common;
    const { tiles } = store.getState().map;
    
    // if borotra has already escaped, return
    if (escaped) return;

    // get tile location
    const { location } = tiles.find(tile => tile.id === tileId);

    // borotra cannot escape from the Cellar or Great Hall, if here, return
    if (location === 'C' || location === 'GH') {
        console.log('Boratra cannot escape from the Cellar of the Great Hall');
        return;
    }

    // shuffle the 142 Infantry Regiment card and bottom cards
    shuffleBottomCards();

    // remove Borotra from tile
    removeUnitFromTile(tileId);

    // update Borotra to have escaped
    escapeBorotra();
};

export default escape;
