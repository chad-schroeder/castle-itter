import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MessageBox from './MessageBox';

import { isPhaseActive, canTakeAction, canMove } from '../Utils/Units/checks';
import { getValidLocationAllies } from '../Utils/Units/allies';
import { moveFriendly, swapFriendly } from '../Utils/Actions/move';
import { getMoveTiles } from '../Utils/Libs/tiles';

import { 
    toggleOrdered, toggleCommanded, toggleDisrupted, toggleExhaustion, toggleCasualty, 
} from '../Utils/Units/update';

import { ActionButton, Flex, Grid, Item, Picker, View, Heading } from '@adobe/react-spectrum';
import Cancel from '@spectrum-icons/workflow/Cancel';

const ActionDialog = ({ activeUnit }) => {
    const { phase } = useSelector(state => state.common);

    const movementTiles = getMoveTiles();
    console.log(movementTiles);

    const dispatch = useDispatch();

    const onDeactivate = () => {
        dispatch({ type: 'UNSET_ACTIVE_UNIT' });
    };

    if (activeUnit) {
        const { id, name, tile, location, casualty } = activeUnit;
        const phaseActive = isPhaseActive(location);

        return (
            <View
                borderWidth="thin"
                borderColor="dark"
                borderRadius="medium"
                marginY="size-200"
                paddingY="size-125"
                paddingX="size-200"
            >
                <Heading level={3} marginBottom="size-100">Unit Actions</Heading>

                <Grid
                    areas={[
                        'unit',
                        'message',
                    ]}
                    rows={['auto', 'auto']}
                    gap="size-100">

                    <Flex direction="row" gap="size-100" alignItems="center" gridArea="unit">
                        <p>{name}</p>
                        <ActionButton>
                            {tile}
                        </ActionButton>

                        {phaseActive && (
                            <>
                                <p>
                                    move to
                                </p>
                                <Picker 
                                    items={movementTiles}
                                    onSelectionChange={selected => moveFriendly(id, tile, selected)} 
                                    aria-label="Move"
                                >
                                    {item => <Item>{item.id}</Item>}
                                </Picker>

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
    
   
    //         {canTakeAction(activeUnit) && (
    //             <>
    //                 <Picker 
    //                     items={locationAllies}
    //                     onSelectionChange={(selected) => setSecondUnit(selected)} 
    //                     aria-label="Swap"
    //                 >
    //                     {item => <Item>{item.id}</Item>}
    //                 </Picker>
    //                 <ActionButton onPress={() => swapFriendly(activeUnit, allies[secondUnit])}>
    //                     Swap
    //                 </ActionButton>
    //             </>
    //         )}


    //     </StyledContainer>
    // );
};

export default ActionDialog;
