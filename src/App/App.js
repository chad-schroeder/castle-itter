import React, { useEffect }         from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Map } from 'Map';
import DialogManager from 'DialogManager';

import { buildDeck } from 'Utils/Libs/deck';
import { phaseUnits } from 'Utils/Units/defenders';

import { 
    Grid, RadioGroup, Radio, View, Item, ActionButton, Divider, Flex, Picker, Heading, TextField, Switch,
} from '@adobe/react-spectrum';

import { StyledContainer } from './styled';

const App = () => {
    const { 
        phase, 
        defenderTurn, 
        actionRound, 
        paused,
        currentAction,
        displayDialog,
        suppression,
    } = useSelector(state => state.app);

    const dispatch = useDispatch();

    const onTurnChange = () => {
        dispatch({ type: 'NEXT_TURN' });
        dispatch({ type: 'CLEAR_UNIT_ACTIVATIONS' });
    };

    const onActionChange = number => {
        dispatch({ type: 'NEXT_ACTION', payload: number });
    };

    const onPhaseChange = (phase) => {
        dispatch({ type: 'SET_PHASE', payload: phase });
        phaseUnits(phase);
    };

    const onPauseGame = () => {
        dispatch({ type: 'TOGGLE_GAME_PAUSE' });
    };

    const onNewGame = () => {
        dispatch({ type: 'NEW_GAME' });
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
                                <TextField
                                    value={suppression.green}
                                    label="Green"
                                    width="size-600"
                                    isReadOnly
                                />
                                <TextField
                                    value={suppression.orange}
                                    label="Orange"
                                    width="size-600"
                                    isReadOnly
                                />
                                <TextField
                                    value={suppression.purple}
                                    label="Purple"
                                    width="size-600"
                                    isReadOnly
                                />
                                <TextField
                                    value={suppression.black}
                                    label="Black"
                                    width="size-600"
                                    isReadOnly
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
