import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Map } from 'Map';
import Card from 'Card';

import { buildDeck } from 'Utils/Libs/deck';
import playCard from 'Utils/Libs/playCard';
import { spendAction } from 'Utils/Libs/game';
import escape from 'Utils/Libs/escape';
import { destroyBesottenJenny } from 'Utils/Libs/tiles';

import store from 'store';

const setupGame = () => {
    store.dispatch({ type: 'NEW_GAME' });
    buildDeck();
};

const App = () => {
    const { tiles } = useSelector(state => state.map);
    const { allies } = useSelector(state => state.units);

    const [card, setCard] = useState(null);

    useEffect(() => {
        setupGame();
    }, []);
    
    return (
        <>
            <h1>Castle Itter</h1>
            <Card {...card} />
            <button onClick={() => setCard(playCard())}>
                Play Card
            </button>
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
            <Map tiles={tiles} allies={allies} />
        </>
    );
};

export default App;
