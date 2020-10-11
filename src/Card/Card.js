import React from 'react';

const Card = ({ id, type, action, count, cardDeck }) => {
    if (id) {
        return (
            <div key={id}>
                <h3>{type}</h3>
                <p>Action: {action}</p>
                {count && <p>Count: {count}</p>}
                <p>Deck: {cardDeck}</p>
            </div>
        );
    }
    return null;
};

export default Card;
