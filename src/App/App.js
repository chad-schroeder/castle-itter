import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ActionDialog from 'ActionDialog';
import AppDialog from 'AppDialog';
import { Map } from 'Map';
import MessageBox from 'MessageBox';
// import Card from 'Card';

import { buildDeck } from 'Utils/Libs/deck';
// import playCard from 'Utils/Libs/playCard';
// import { spendAction } from 'Utils/Libs/game';
// import escape from 'Utils/Libs/escape';
// import { destroyBesottenJenny } from 'Utils/Libs/tiles';
// import { actionMove } from 'Utils/Actions/move';
// import { command } from 'Utils/Actions/command';

import { Grid, Heading, RadioGroup, Radio, View, Item, Dialog, DialogContainer, Content, ActionButton, ButtonGroup, Button, Divider, Flex, Picker, } from '@adobe/react-spectrum';

const App = () => {
    const { 
        activeUnit, 
        appMessage, 
        phase, 
        playerTurn, 
        action, 
        paused,
    } = useSelector(state => state.app);

    const [dialogOpen, setDialogOpen] = useState(false);
    // const [card, setCard] = useState(null);
    const dispatch = useDispatch();

    const { 
        title: dialogTitle, 
        content: dialogContent, 
        button: dialogButton,
    } = appMessage;

    const onDialogClose = () => {
        dispatch({ type: 'UNSET_APP_MESSAGE' });
        setDialogOpen(false);
    };

    const onTurnChange = () => {
        dispatch({ type: 'NEXT_TURN' });
    };

    const onActionChange = number => {
        dispatch({ type: 'NEXT_ACTION', payload: number });
    };

    const onPhaseChange = (phase) => {
        dispatch({ type: 'SET_PHASE', payload: phase });
    };

    const onEscape = () => {
        dispatch({ type: 'BOROTRA_ESCAPED' });
    };

    const onPauseGame = () => {
        if (paused) {
            dispatch({ type: 'RESUME_GAME' });
        } else {
            dispatch({ type: 'PAUSE_GAME' });
        }
    };

    const onNewGame = () => {
        dispatch({ type: 'NEW_GAME' });
    };

    const onTankLoad = () => {
        dispatch({ type: 'TANK_CANNON_LOADED' });
    };

    const onTankFire = () => {
        dispatch({ type: 'TANK_CANNON_FIRED' });
    };

    // const triggerDialog = () =>{
    //     const payload = {
    //         title: 'Title',
    //         content: 'This is a test from Headquarters',
    //         button: 'Close',
    //     };

    //     dispatch({ type: 'SET_APP_MESSAGE', payload });
    // };
   
    useEffect(() => {
        buildDeck();
    }, []);

    useEffect(() => {
        if (dialogTitle) setDialogOpen(true);
    }, [dialogTitle]);

    return (
        <>
            <Grid
                rows={['auto', 'auto', 'auto', 'auto', 'auto', 'auto']}
                gap="size-100"
            >
                <h1>Castle Itter</h1>
                <View
                    borderWidth="thin"
                    borderColor="dark"
                    borderRadius="medium"
                    padding="size-150"
                >
                    <Flex direction="row" gap="size-100">
                        <Picker 
                            label="Phase" 
                            defaultSelectedKey={phase}
                            onSelectionChange={selected => onPhaseChange(selected)}
                        >
                            <Item key="Deployment">Deployment</Item>
                            <Item key="Cellar">Cellar</Item>
                            <Item key="Reinforcement">Reinforcement</Item>
                        </Picker>
                        <Divider orientation="vertical" size="S" />
                        <RadioGroup 
                            label="Turn"
                            value={playerTurn.toString()}
                            onChange={onTurnChange}
                            orientation="horizontal"
                        >
                            <Radio value="true">Defender</Radio>
                            <Radio value="false">Axis</Radio>
                        </RadioGroup>
                        <Divider orientation="vertical" size="S" />
                        <RadioGroup 
                            label="Action" 
                            value={action.toString()}
                            onChange={onActionChange}
                            orientation="horizontal"
                        >
                            <Radio value="1">1</Radio>
                            <Radio value="2">2</Radio>
                            <Radio value="3">3</Radio>
                            <Radio value="4">4</Radio>
                            <Radio value="5">5</Radio>
                        </RadioGroup>
                    </Flex>
                </View>
                <View
                    borderWidth="thin"
                    borderColor="dark"
                    borderRadius="medium"
                    padding="size-150"
                >
                    <Flex direction="row" gap="size-100">
                        <ActionButton onPress={onEscape}>Escape</ActionButton>
                        <ActionButton onPress={onTankLoad}>Load Tank</ActionButton>
                        <ActionButton onPress={onTankFire}>Fire Tank</ActionButton>
                        <ActionButton onPress={onPauseGame}>
                            {paused ? 'Unpause Game' : 'Pause Game'}
                        </ActionButton>
                        <ActionButton onPress={onNewGame}>New Game</ActionButton>
                    </Flex>
                </View>

                {/* <View
                    borderWidth="thin"
                    borderColor="dark"
                    borderRadius="medium"
                    padding="size-150"
                >
                    <Button onPress={triggerDialog}>Dialog</Button>
                </View> */}
                <Map />
                <ActionDialog activeUnit={activeUnit} />
                <MessageBox 
                    unit={activeUnit}
                    phase={phase}
                />
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
