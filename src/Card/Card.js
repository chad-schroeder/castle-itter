import React from 'react';

const Card = ({ id, type, card, count, cardDeck }) => {
    if (id) {
        return (
            <div key={id}>
                <h3>{type}</h3>
                <p>Action: {card}</p>
                {count && <p>Count: {count}</p>}
                <p>Deck: {cardDeck}</p>
            </div>
        );
    }
    return null;
};

export default Card;
