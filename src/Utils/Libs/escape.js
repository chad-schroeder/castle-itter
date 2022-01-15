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
    const { deckLevel } = store.getState().app;

    let count = 9;

    if (deckLevel === 3) count = 6;
    if (deckLevel === 4) count = 4;

    return count;
};

const shuffleBottomCards = () => {
    const { deck } = store.getState().app;

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

// const escape = ({ id, location }) => {
//     // Borotra cannot escape from the Cellar or Great Hall, return
//     if (location === 'C' || location === 'GH') return;

//     // shuffle the 142 Infantry Regiment card and bottom cards
//     shuffleBottomCards();

//     // remove Borotra from tile
    
//     // update state to 'escaped: true'
// };

export default escape;
