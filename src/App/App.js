import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ActionDialog from 'ActionDialog';
import AppDialog from 'AppDialog';
import { Map } from 'Map';
// import Card from 'Card';

import { buildDeck } from 'Utils/Libs/deck';
// import playCard from 'Utils/Libs/playCard';
// import { spendAction } from 'Utils/Libs/game';
// import escape from 'Utils/Libs/escape';
// import { destroyBesottenJenny } from 'Utils/Libs/tiles';
// import { actionMove } from 'Utils/Actions/move';
// import { command } from 'Utils/Actions/command';

import { Grid, Heading, RadioGroup, Radio, View, ActionGroup, Item, Dialog, DialogContainer, Content, ActionButton, ButtonGroup, Button, Divider, Picker, } from '@adobe/react-spectrum';

const App = () => {
    const { activeUnit, appMessage, phase } = useSelector(state => state.common);
    const [dialogOpen, setDialogOpen] = useState(false);
    // const [card, setCard] = useState(null);
    const dispatch = useDispatch();

    const { title: dialogTitle, content: dialogContent, button: dialogButton } = appMessage;

    const onDialogClose = () => {
        dispatch({ type: 'UNSET_APP_MESSAGE' });
        setDialogOpen(false);
    };

    const onPhaseChange = (phase) => {
        dispatch({ type: 'SET_PHASE', payload: phase });
    };

    const triggerDialog = () =>{
        const payload = {
            title: 'Title',
            content: 'This is a test from Headquarters',
            button: 'Close',
        };

        dispatch({ type: 'SET_APP_MESSAGE', payload });
    };
   
    useEffect(() => {
        buildDeck();
    }, []);

    useEffect(() => {
        if (dialogTitle) setDialogOpen(true);
    }, [dialogTitle]);

    return (
        <>
            <Grid
                rows={['auto', 'auto', 'auto', 'auto', 'auto']}
                gap="size-100"
            >
                <h1>Castle Itter</h1>
                <View
                    borderWidth="thin"
                    borderColor="dark"
                    borderRadius="medium"
                    padding="size-150"
                >
                    <Button onPress={triggerDialog}>Dialog</Button>
                </View>
                <View
                    borderWidth="thin"
                    borderColor="dark"
                    borderRadius="medium"
                    padding="size-150"
                >
                    <Picker 
                        label="Set Phase" 
                        defaultSelectedKey={phase}
                        onSelectionChange={selected => onPhaseChange(selected)}
                    >
                        <Item key="Deployment">Deployment</Item>
                        <Item key="Cellar">Cellar</Item>
                        <Item key="Reinforcement">Reinforcement</Item>
                    </Picker>
                </View>
                <Map />
                <ActionDialog activeUnit={activeUnit} />
            </Grid>
            
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
            
            
            <DialogContainer onDismiss={onDialogClose}>
                {dialogOpen &&
                    <Dialog>
                        <Heading>{dialogTitle}</Heading>
                        <Divider />
                        <Content>{dialogContent}</Content>
                        <ButtonGroup>
                            <Button variant="secondary" onPress={onDialogClose}>{dialogButton}</Button>
                        </ButtonGroup>
                    </Dialog>
                }
            </DialogContainer>
        </>
    );
};

export default App;
