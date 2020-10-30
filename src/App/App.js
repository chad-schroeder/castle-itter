import React, { useEffect, useState } from 'react';

import { Map } from 'Map';
import Card from 'Card';
import Score from 'Score';
import Unit from 'Unit';

import { buildDeck } from 'Utils/Libs/deck';
import playCard from 'Utils/Libs/playCard';
import { spendAction } from 'Utils/Libs/turn';
import escape from 'Utils/Libs/escape';
import destroyBesottenJenny from 'Utils/Libs/destroyBesottenJenny';
// import { cardSniper, cardDisrupt, cardPanzerfaust, cardSuppressiveFire } from 'Utils/Enemy/disruption';

import store from 'store';

const basse = {
    id: 'basse',
    name: 'Basse',
    nationality: 'USA',
    placement: 'Deployment',
    attack: 1,
    suppress: 2,
    modifiers: {
        commander: true,
        tanker: true,
    },
    exhausted: false,
    kia: false,
    tokens: {
        tookAction: false,
        commanded: false,
        disrupted: false,
    }
};

const setupGame = () => {
    store.dispatch({ type: 'NEW_GAME' });
    buildDeck();
};

const App = () => {
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
            <Unit unit={basse} />
            <Map />
            {/* <Score /> */}
        </>
    );
};

export default App;
