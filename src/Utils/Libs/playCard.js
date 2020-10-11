import store from '../../store';

const playCard = () => {
    const { deck, deckLevel } = store.getState().common;

    if (deck.length) {
        const cardDrawn = deck[0];
        const { id, card, set } = cardDrawn;
        console.log('Current card:', cardDrawn);

        // if card played is from new deck, advance deck level
        if (set > deckLevel) {
            store.dispatch({ type: 'UPDATE_DECK_LEVEL', payload: set });
        }

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
            case 'reinforcements': {
                console.log('Action: Reinforcements');
                break;
            }
            case '142nd': {
                console.log('Action: 142 Infantry Regiment');
                break;
            }
            default: {
                console.log('Action: Disrupt');
                break;
            }
        }

        const cards = deck.filter(card => card.id !== id);
        store.dispatch({ type: 'PLAYED_CARD', payload: cards });
    } else {
        console.log('You lose: Deck exhausted');
        store.dispatch({ type: 'GAME_OVER', payload: false });
    }
};

export default playCard;
