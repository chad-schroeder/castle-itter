import store from '../../store';

const playCard = () => {
    const { deck } = store.getState().common;

    if (deck.length) {
        const currentCard = deck.shift();

        const { action } = currentCard;

        switch(action) {
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

        // remove card from deck, update deck
        store.dispatch({ type: 'CARD_PLAYED', payload: { deck, currentCard } });

        return currentCard;
    } else {
        console.log('You lose: Deck exhausted');
        store.dispatch({ type: 'GAME_OVER', payload: false });
    }
};

export default playCard;
