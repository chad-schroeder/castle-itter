import React, { useEffect }         from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Map } from 'Map';
import DialogManager from 'DialogManager';

import { buildDeck } from 'Utils/Libs/deck';

import { 
    Grid, RadioGroup, Radio, View, Item, ActionButton, Divider, Flex, Picker, Heading, NumberField, TextField, Switch,
} from '@adobe/react-spectrum';

import { StyledContainer, } from './styled';

const App = () => {
    const { 
        phase, 
        defenderTurn, 
        actionRound, 
        paused,
        currentAction,
        displayDialog,
    } = useSelector(state => state.app);

    const dispatch = useDispatch();

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
        dispatch({ type: 'TOGGLE_GAME_PAUSE' });
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

    const handleSuppression = (val, color) => {
        dispatch({ 
            type: 'MODIFY_SUPPRESSION', 
            payload: { 
                [color]: val,
            },
        });
    };

    const handleDialog = dialog => {
        dispatch({ type: 'DISPLAY_DIALOG', payload: dialog });
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
                <Heading level={2}>Castle Itter: The Strangest Battle of WWII</Heading>

                <View
                    borderWidth="thin"
                    borderColor="dark"
                    borderRadius="medium"
                    padding="size-150"
                >
                    <StyledContainer>
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

                            <Divider orientation="vertical" size="S" />

                            <TextField 
                                label="Current action" 
                                value={currentAction}
                                isReadOnly 
                                isDisabled={currentAction === ''}
                            />

                            <Divider orientation="vertical" size="S" />

                            <Flex direction="row" gap="size-50">
                                <NumberField
                                    label="Black"
                                    defaultValue={0}
                                    minValue={0}
                                    onChange={(value) => handleSuppression(value, 'black')}
                                />
                                <NumberField
                                    label="Purple"
                                    defaultValue={0}
                                    minValue={0} 
                                    onChange={(value) => handleSuppression(value, 'purple')}
                                />
                                <NumberField
                                    label="Orange"
                                    defaultValue={0}
                                    minValue={0} 
                                    onChange={(value) => handleSuppression(value, 'orange')}
                                />
                                <NumberField
                                    label="Green"
                                    defaultValue={0}
                                    minValue={0} 
                                    onChange={(value) => handleSuppression(value, 'green')}
                                />
                            </Flex>
                            
                        </Flex>
                    </StyledContainer>
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
                        <Picker 
                            label="Dialog" 
                            selectedKey={displayDialog}
                            onSelectionChange={handleDialog}
                            labelPosition="side" 
                            labelAlign="end"
                            placeholder="Select a dialog"
                        >
                            <Item key="gameStart">Game Start</Item>
                            <Item key="score">Score</Item>
                            <Item key="credits">Credits</Item>
                        </Picker>
                        <Switch
                            isSelected={paused}
                            onChange={onPauseGame}>
                            Paused
                        </Switch>
                    </Flex>
                </View>
                <Map />
                <DialogManager />
            </Grid>
        </>
    );
};

export default App;
