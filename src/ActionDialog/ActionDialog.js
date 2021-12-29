import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

import { canTakeAction } from '../Utils/Units/checks';
import { removeExhaustion, removeOrdered, removeDisruption, removeCommanded } from '../Utils/Units/update';

import { ActionButton, Item, Picker, } from '@adobe/react-spectrum';

import { StyledContainer, } from './styled';

const ActionDialog = ({ unit, tiles, allies, axis }) => {
    const { unitId, name, exhausted, ordered, disrupted, commanded, tileId } = unit;

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
            {exhausted && (
                <ActionButton onPress={() => removeExhaustion(unitId)}>
                    Remove Exhaustion
                </ActionButton>
            )}
            {ordered && (
                <ActionButton onPress={() => removeOrdered(unitId)}>
                    Remove Ordered
                </ActionButton>
            )}
            {disrupted && (
                <ActionButton onPress={() => removeDisruption(unitId)}>
                    Remove Disruption
                </ActionButton>
            )}
            {commanded && (
                <ActionButton onPress={() => removeCommanded(unitId)}>
                    Remove Commanded
                </ActionButton>
            )}
        </StyledContainer>
    );
};

export default ActionDialog;
