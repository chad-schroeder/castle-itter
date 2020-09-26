import { v4 as uuidv4 } from 'uuid'; // uuidv4()

import store from '../../store';

const shuffle = (deck) => {
    for (let i = deck.length - 1; i > 0; i -= 1) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
    }
    return deck;
};

const buildDeck = () => {
    const decks = store.getState().common.decks;
    
    const deck = [
        ...shuffle(decks[1]),
        ...shuffle(decks[2]),
        ...shuffle(decks[3]),
        ...shuffle(decks[4]),
    ];

    return deck;
};

export default buildDeck;

