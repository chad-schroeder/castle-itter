import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ActionDialog from 'ActionDialog';
import { Map } from 'Map';
import MessageBox from 'MessageBox';

import { buildDeck } from 'Utils/Libs/deck';

import { Grid, RadioGroup, Radio, View, Item, ActionButton, Divider, Flex, Picker, } from '@adobe/react-spectrum';

const App = () => {
    const { 
        phase, 
        defenderTurn, 
        actionRound, 
        paused,
        activeDefenderId,
    } = useSelector(state => state.app);
    const { defenders } = useSelector(state => state.units);
    const dispatch = useDispatch();

    const activeDefender = defenders.find(defender => defender.id === activeDefenderId);

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
        dispatch({ type: 'SET_GAME_PAUSE' });
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
   
    useEffect(() => {
        buildDeck();
    }, []);

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
                            value={defenderTurn.toString()}
                            onChange={onTurnChange}
                            orientation="horizontal"
                        >
                            <Radio value="true">Defender</Radio>
                            <Radio value="false">Axis</Radio>
                        </RadioGroup>
                        <Divider orientation="vertical" size="S" />
                        <RadioGroup 
                            label="Action" 
                            value={actionRound.toString()}
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
                <Map />
                {activeDefender && <ActionDialog unit={activeDefender} />}
                <MessageBox />
            </Grid>
        </>
    );
};

export default App;
