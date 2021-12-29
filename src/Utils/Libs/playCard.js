import store from '../../store';
console.log('Play Card', store);

const playCard = () => {
    const { deck } = store.getState().common;
    const { axis } = store.getState().units;

    if (deck.length) {
        // select next card
        const { id, type, count, cardDeck } = deck.shift();

        // get attributes of card selected
        const { name, defense, attack, disrupt } = axis[type];

        const card = {
            id,
            name,
            ...(defense && { defense }),
            ...(attack && { attack }),
            ...(count && { count }),
            ...(disrupt && { disrupt }),
            cardDeck,
        };

        store.dispatch({ type: 'CARD_PLAYED', payload: { deck, card } });
        return card;
    } else {
        console.log('You lose: Deck exhausted');
        store.dispatch({ type: 'GAME_OVER', payload: false });
    }
};

export default playCard;
