import { cardSniper } from 'Utils/Enemy/disruption';
import store from '../../store';

const shuffle = (deck) => {
    for (let i = deck.length - 1; i > 0; i -= 1) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
    }
    return deck;
};

export const playCard = () => {
    const { deck } = store.getState().common;

    if (deck.length) {
        const { id, deck: deckId, card, target, type } = deck[0];
        console.log('Current card:', deck[0]);
        console.log('Play card:', type);
        console.log('Current deck:', deckId);

        switch(card) {
            case 'advance': {
                console.log('Action: Advance');
                break;
            }
            case 'sniper': {
                console.log('Action: Sniper');
                break;
            }
            case 'suppress': {
                console.log('Action: Suppress');
                break;
            }
            case 'panzerfaust': {
                console.log('Action: Panzerfaust');
                break;
            }
            default: {
                console.log('Action: Disrupt');
                break;
            }
        }

        // remove top card from deck, by id instead of .unshift() as a debug precaution
        const cards = deck.filter(card => card.id !== id);
        store.dispatch({ type: 'PLAYED_CARD', payload: cards });
    } else {
        console.log('Game Over: Deck exhausted');
    }
};

export const buildDeck = () => {
    const decks = store.getState().common.decks;
    
    const deck = [
        ...shuffle(decks[1]),
        ...shuffle(decks[2]),
        ...shuffle(decks[3]),
        ...shuffle(decks[4]),
    ];

    store.dispatch({ type: 'BUILD_DECK', payload: deck });
};

