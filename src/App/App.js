import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Map } from 'Map';
import Card from 'Card';
import ActionDialog from 'ActionDialog';

import { buildDeck } from 'Utils/Libs/deck';
import playCard from 'Utils/Libs/playCard';
import { spendAction } from 'Utils/Libs/game';
import escape from 'Utils/Libs/escape';
import { destroyBesottenJenny } from 'Utils/Libs/tiles';

import { Heading, RadioGroup, Radio, View } from '@adobe/react-spectrum';

import store from 'store';

const setupGame = () => {
    store.dispatch({ type: 'NEW_GAME' });
    buildDeck();
};

const App = () => {
    const { tiles } = useSelector(state => state.map);
    const { allies } = useSelector(state => state.units);

    const [card, setCard] = useState(null);
    const [highlight, setHighlight] = useState('none');

    const basse = {
        id: 'basse',
        name: 'Basse',
        nationality: 'USA',
        placement: 'Deployment',
        attack: 1,
        suppress: 2,
        commander: true,
        tanker: true,
        tokens: {
            ordered: false,
            commanded: false,
            disrupted: false,
        },
        exhausted: false,
        casualty: false,
        escape: true,
    };

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
            <View
                borderWidth="thin"
                borderColor="dark"
                borderRadius="medium"
                marginY="size-200"
                paddingY="size-125"
                paddingX="size-200"
            >
                <Heading level={3} marginBottom="size-100">Highlight</Heading>
                <View
                    borderWidth="thin"
                    borderColor="dark"
                    borderRadius="medium"
                    paddingY="size-125"
                    paddingX="size-200"
                >
                    <RadioGroup 
                        orientation="horizontal" 
                        value={highlight}
                        onChange={setHighlight}
                    >
                        <Radio value="none">None</Radio>
                        <Radio value="move">Move</Radio>
                        <Radio value="moveWithin">Move Within</Radio>
                        <Radio value="command">Command</Radio>
                        <Radio value="inspired">Inspired</Radio>
                        <Radio value="morale">Morale</Radio>
                    </RadioGroup>
                </View>
            </View>
            <Map highlight={highlight} tiles={tiles} allies={allies} />
            <View
                borderWidth="thin"
                borderColor="dark"
                borderRadius="medium"
                marginY="size-200"
                paddingY="size-125"
                paddingX="size-200"
            >
                <Heading level={3} marginBottom="size-100">Unit Actions</Heading>
                <ActionDialog unit={basse} location='G' />
            </View>
        </>
    );
};

export default App;
