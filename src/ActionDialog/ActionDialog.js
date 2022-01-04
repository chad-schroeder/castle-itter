import React, { useState } from 'react';

import { canTakeAction } from '../Utils/Units/checks';
import { moveFriendly, swapFriendly } from '../Utils/Actions/move';
import { toggleExhaustion, toggleToken, toggleCasualty } from '../Utils/Units/update';

import { ActionButton, Item, Picker, } from '@adobe/react-spectrum';

import { StyledContainer, } from './styled';

const ActionDialog = ({ unit, tiles, allies, axis }) => {
    console.log('ActionDialog', unit);
    const { id: unitId, name, casualty, tile } = unit;

    const [selectedTile, setSelectedTile] = useState(null);

    return (
        <StyledContainer>
            <p>{name}</p>
            <ActionButton>
                {tile}
            </ActionButton>
            {canTakeAction(unit) && (
                <>
                    <p>
                        move to
                    </p>
                    <Picker 
                        items={tiles}
                        onSelectionChange={(selected) => setSelectedTile(selected)} 
                        aria-label="Move"
                    >
                        {item => <Item>{item.id}</Item>}
                    </Picker>
                    <ActionButton onPress={() => moveFriendly(unitId, tile, selectedTile)}>
                        Move
                    </ActionButton>
                    <ActionButton onPress={() => swapFriendly(unitId, 'hockel')}>
                        Swap
                    </ActionButton>
                </>
            )}
            <ActionButton
                onPress={() => toggleExhaustion(unit)}
                isDisabled={casualty}
            >
                Toggle Exhaustion
            </ActionButton>
            <ActionButton 
                onPress={() => toggleToken(unit, 'ordered')}
                isDisabled={casualty}
            >
                Toggle Ordered
            </ActionButton>
            <ActionButton 
                onPress={() => toggleToken(unit, 'disrupted')}
                isDisabled={casualty}
            >
                Toggle Disruption
            </ActionButton>
            <ActionButton 
                onPress={() => toggleToken(unit, 'commanded')}
                isDisabled={casualty}
            >
                Toggle Commanded
            </ActionButton>
            <ActionButton 
                onPress={() => toggleCasualty(unit)}
            >
                Set Casualty
            </ActionButton>
        </StyledContainer>
    );
};

export default ActionDialog;
