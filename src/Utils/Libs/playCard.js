import store from '../../store';

const playCard = () => {
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
            case 'reinforcements': {
                console.log('reinforcements');
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
        store.dispatch({ type: 'GAME_OVER' });
    }
};

export default playCard;
