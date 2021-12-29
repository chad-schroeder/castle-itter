import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

import { canTakeAction } from '../Utils/Units/checks';
import { toggleExhaustion, toggleToken, setCasualty } from '../Utils/Units/update';

import { ActionButton, Item, Picker, } from '@adobe/react-spectrum';

import { StyledContainer, } from './styled';

const ActionDialog = ({ unit, tiles, allies, axis }) => {
    const { unitId, name, exhausted, casualty, ordered, disrupted, commanded, tileId } = unit;
    console.log('Unit', unit);

    const [selectedTile, setSelectedTile] = useState(null);

    return (
        <StyledContainer>
            <p>{name}</p>
            <ActionButton>
                {tileId}
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
                    <ActionButton onPress={() => console.log('move')}>
                        Move
                    </ActionButton>
                </>
            )}
            <ActionButton
                onPress={() => toggleExhaustion(unitId)}
                isDisabled={casualty}
            >
                Toggle Exhaustion
            </ActionButton>
            <ActionButton 
                onPress={() => toggleToken(unitId, 'ordered')}
                isDisabled={casualty}
            >
                Toggle Ordered
            </ActionButton>
            <ActionButton 
                onPress={() => toggleToken(unitId, 'disrupted')}
                isDisabled={casualty}
            >
                Toggle Disruption
            </ActionButton>
            <ActionButton 
                onPress={() => toggleToken(unitId, 'commanded')}
                isDisabled={casualty}
            >
                Toggle Commanded
            </ActionButton>
            <ActionButton 
                onPress={() => setCasualty(unitId)}
                isDisabled={casualty}
            >
                Set Casualty
            </ActionButton>
        </StyledContainer>
    );
};

export default ActionDialog;
