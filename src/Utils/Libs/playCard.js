import store from '../../store';

const drawCard = deck => {
    const currentCard = deck.shift();
    return currentCard;
};

const playCard = deck => {
    if (deck.length) {
        const card = drawCard(deck);
        
        const { action } = card;
        console.log('action', action);

        // remove card and update deck
        store.dispatch({ type: 'CARD_PLAYED', payload: { deck, card } });

        return card;
    } else {
        console.log('You lose: Deck exhausted');
        store.dispatch({ type: 'GAME_OVER', payload: false });
    }
};

export default playCard;
