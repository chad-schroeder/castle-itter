import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Map } from 'Map';
import { Units } from 'Units';
import Card from 'Card';
import Score from 'Score';

import { buildDeck } from 'Utils/Libs/deck';
import playCard from 'Utils/Libs/playCard';
import { spendAction } from 'Utils/Libs/turn';
import escape from 'Utils/Libs/escape';
import destroyBesottenJenny from 'Utils/Libs/destroyBesottenJenny';
// import { cardSniper, cardDisrupt, cardPanzerfaust, cardSuppressiveFire } from 'Utils/Enemy/disruption';

import store from 'store';

const setupGame = () => {
    store.dispatch({ type: 'NEW_GAME' });
    buildDeck();
};

const App = () => {
    const [card, setCard] = useState(null);

    const { deck } = useSelector(state => state.common);
    
    useEffect(() => {
        setupGame();
    }, []);
    
    return (
        <>
            <h1>Castle Itter</h1>
            <button onClick={() => setCard(playCard(deck))}>
                Play Card
            </button>
            <Card {...card} />
            <button onClick={spendAction}>
                Spend Action
            </button>
            <button onClick={destroyBesottenJenny}>
                Destroy Besotten Jenny
            </button>
            <button onClick={setupGame}>
                New Game
            </button>
            <button onClick={() => escape('G2')}>
                Escape
            </button>
            <Map />
            <Units />
            <Score />
        </>
    );
};

export default App;
