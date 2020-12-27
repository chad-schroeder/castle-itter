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

import { Heading, RadioGroup, Radio, View, ActionGroup, Item } from '@adobe/react-spectrum';

import store from 'store';

const setupGame = () => {
    store.dispatch({ type: 'NEW_GAME' });
    buildDeck();
};

const App = () => {
    const { tiles, tracks, locations } = useSelector(state => state.map);
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
            <ActionGroup>
                <Item key="add">Play Card</Item>
                <Item key="add">Spend Action</Item>
                <Item key="add">Destroy Besotten Jenny</Item>
                <Item key="add">New Game</Item>
                <Item key="add">Escape</Item>
            </ActionGroup>
            {/* <button onClick={() => setCard(playCard())}>
                
            </button>
            <button onClick={spendAction}>
                
            </button>
            <button onClick={destroyBesottenJenny}>
                
            </button>
            <button onClick={setupGame}>
                
            </button>
            <button onClick={() => escape('G2')}>
                
            </button> */}
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
                        aria-label="Set highlight"
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
            <Map 
                highlight={highlight} 
                tiles={tiles} 
                allies={allies} 
                tracks={tracks} 
                locations={locations}
            />
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
