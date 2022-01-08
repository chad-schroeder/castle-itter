import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { canTakeAction, canMove } from '../Utils/Units/checks';
import { getValidLocationAllies } from '../Utils/Units/allies';
import { moveFriendly, swapFriendly } from '../Utils/Actions/move';
import { 
    toggleOrdered, toggleCommanded, toggleDisrupted, toggleExhaustion, toggleCasualty, 
} from '../Utils/Units/update';

import { ActionButton, Item, Picker, View, Heading } from '@adobe/react-spectrum';

import Cancel from '@spectrum-icons/workflow/Cancel';

import { StyledContainer, } from './styled';

const ActionDialog = () => {
    const { activeUnit } = useSelector(state => state.common);
    console.log('ActionDialog', activeUnit);

    const dispatch = useDispatch();

    const onDeactivate = () => {
        dispatch({ type: 'UNSET_ACTIVE_UNIT' });
    };

    // const [selectedTile, setSelectedTile] = useState(null);
    // const [secondUnit, setSecondUnit] = useState(null);
    // const locationAllies = getValidLocationAllies(unitId, tile);
    // canMove(activeUnit);

    if (activeUnit) {
        const { id, name, tile, casualty } = activeUnit;

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
                <StyledContainer>
                    <p>{name}</p>
                    <ActionButton>
                        {tile}
                    </ActionButton>

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
                </StyledContainer>
                
                <ActionButton
                    aria-label="Deactivate unit"
                    onPress={onDeactivate}
                >
                    <Cancel />
                </ActionButton>
            </View>
        );
    }
    return null;
    
   
    //         {canTakeAction(activeUnit) && (
    //             <>
    //                 <p>
    //                     move to
    //                 </p>
    //                 <Picker 
    //                     items={tiles}
    //                     onSelectionChange={(selected) => setSelectedTile(selected)} 
    //                     aria-label="Move"
    //                 >
    //                     {item => <Item>{item.id}</Item>}
    //                 </Picker>
    //                 <ActionButton onPress={() => moveFriendly(unitId, tile, selectedTile)}>
    //                     Move
    //                 </ActionButton>
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
