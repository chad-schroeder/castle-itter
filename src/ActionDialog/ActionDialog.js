import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ActionSuppress from './ActionSuppress';
import MessageBox from './MessageBox';

import { isPhaseActive, canTakeAction, canMove } from '../Utils/Units/checks';
import { getSwapAllies } from '../Utils/Units/allies';
import { moveFriendly, swapFriendly } from '../Utils/Actions/move';
import { getMoveTiles } from '../Utils/Libs/tiles';

import { 
    toggleOrdered, toggleCommanded, toggleDisrupted, toggleExhaustion, toggleCasualty, loadTankCannon,
} from '../Utils/Units/update';

import { ActionButton, Flex, Grid, Item, Picker, View, Heading } from '@adobe/react-spectrum';
import Cancel from '@spectrum-icons/workflow/Cancel';

const ActionDialog = ({ activeUnit }) => {
    const { phase } = useSelector(state => state.common);
    const dispatch = useDispatch();

    if (activeUnit) {
        const { id, name, tile, location, casualty } = activeUnit;
        const movementTiles = getMoveTiles();
        const swapAllies = getSwapAllies(id, location);
        const phaseActive = isPhaseActive(location);

        const onPress = () => {
            dispatch({ type: 'RECOVER_UNIT', payload: id });
        }

        const onDeactivate = () => {
            dispatch({ type: 'UNSET_ACTIVE_UNIT' });
        };

        return (
            <View
                borderWidth="thin"
                borderColor="dark"
                borderRadius="medium"
                paddingY="size-125"
                paddingX="size-200"
            >
                <Heading level={3} marginBottom="size-100">Unit Actions</Heading>

                <Grid
                    areas={[
                        'unit',
                        'message',
                    ]}
                    rows={['auto', 'auto', 'auto', 'auto']}
                    gap="size-100">

                    <View
                        borderWidth="thin"
                        borderColor="dark"
                        borderRadius="medium"
                        paddingY="size-125"
                        paddingX="size-200"
                    >
                        <Flex direction="row" gap="size-100">
                            <ActionButton onPress={() => console.log('Attack')}>
                                Attack
                            </ActionButton>
                            <ActionSuppress unit={activeUnit} />
                            <ActionButton>Move</ActionButton>
                            <ActionButton>Deploy</ActionButton>
                            <ActionButton>Swap</ActionButton>
                            <ActionButton onPress={onPress}>Recover</ActionButton>
                            <ActionButton>Command</ActionButton>
                            <ActionButton>Escape</ActionButton>
                        </Flex>
                    </View>

                    <Flex direction="row" gap="size-100" alignItems="center" gridArea="unit">
                        <p>{name}</p>
                        <ActionButton>
                            {tile}
                        </ActionButton>

                        {phaseActive && (
                            <>
                                <p>move to</p>
                                <Picker 
                                    items={movementTiles}
                                    onSelectionChange={selected => moveFriendly(id, tile, selected)} 
                                    aria-label="Move"
                                >
                                    {item => <Item>{item.id}</Item>}
                                </Picker>

                                {swapAllies.length > 0 && (
                                    <>
                                        <p>swap with</p>
                                        <Picker 
                                            items={swapAllies}
                                            onSelectionChange={selected => console.log(selected)} 
                                            aria-label="Swap"
                                        >
                                            {item => <Item>{item.name}</Item>}
                                        </Picker>
                                    </>
                                )}        

                                <p>Toggles</p>
                                <ActionButton
                                    onPress={() => toggleExhaustion(id)}
                                    isDisabled={casualty}
                                >
                                    Exhausted
                                </ActionButton>

                                <ActionButton 
                                    onPress={() => toggleOrdered(id)}
                                    isDisabled={casualty}
                                >
                                    Ordered
                                </ActionButton>

                                <ActionButton
                                    onPress={() => toggleCommanded(id)}
                                    isDisabled={casualty}
                                >
                                    Commanded
                                </ActionButton>

                                <ActionButton 
                                    onPress={() => toggleDisrupted(id)}
                                    isDisabled={casualty}
                                >
                                    Disrupted
                                </ActionButton>

                                <ActionButton onPress={() => toggleCasualty(id)}>
                                    Casualty
                                </ActionButton>
                            
                                <ActionButton onPress={() => loadTankCannon()}>
                                    Load
                                </ActionButton>
                            </>
                        )}
                            <ActionButton
                                aria-label="Deactivate unit"
                                onPress={onDeactivate}
                            >
                                <Cancel />
                            </ActionButton>
                    </Flex>
                    <MessageBox 
                        unit={activeUnit}
                        phase={phase}
                        gridArea="message" 
                    />
                </Grid>
            </View>
        );
    }
    return null;
};

export default ActionDialog;
