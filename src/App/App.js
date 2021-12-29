import React, { useEffect, useState } from 'react';

import { Map } from 'Map';
// import Card from 'Card';

import { buildDeck } from 'Utils/Libs/deck';
// import playCard from 'Utils/Libs/playCard';
// import { spendAction } from 'Utils/Libs/game';
// import escape from 'Utils/Libs/escape';
// import { destroyBesottenJenny } from 'Utils/Libs/tiles';
// import { actionMove } from 'Utils/Actions/move';
// import { command } from 'Utils/Actions/command';

import { Heading, RadioGroup, Radio, View, ActionGroup, Item, DialogContainer, ActionButton } from '@adobe/react-spectrum';

const App = () => {
    // const [card, setCard] = useState(null);
    const [appDialog, setAppDialog] = useState(false);

    useEffect(() => {
        buildDeck();
    }, []);
    
    return (
        <>
            <h1>Castle Itter</h1>
            {/* <Card {...card} /> */}
            {/* <ActionGroup onAction={() => setAppDialog(true)}>
                <Item key="playCard">Play Card</Item>
                <Item key="spendAction">Spend Action</Item>
                <Item key="destroyJenny">Destroy Besotten Jenny</Item>
                <Item key="newGame">New Game</Item>
                <Item key="escape">Escape</Item>
            </ActionGroup> */}
            {/* <DialogContainer onDismiss={() => setAppDialog(false)} isDismissable>
                {appDialog && (
                    <>
                        <p>Hello, world!</p>
                        <ActionButton onPress={() => setAppDialog(false)}>
                            Close
                        </ActionButton>
                    </>
                )}
            </DialogContainer> */}

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
            {/* <View
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
                        // value={highlight}
                        // onChange={setHighlight}
                        aria-label="Set highlight"
                    >
                        <Radio value="none">None</Radio>
                        <Radio value="move">Move</Radio>
                        <Radio value="moveWithin">Move Within</Radio>
                        <Radio value="command">Command</Radio>
                    </RadioGroup>
                </View>
            </View> */}
            <Map />
        </>
    );
};

export default App;
