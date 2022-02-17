import React, { useState } from 'react';
import { useSelector }     from 'react-redux';

import ActionDialog from '../ActionDialog';
import Unit         from '../Unit';

import { Heading, View } from '@adobe/react-spectrum';

import { StyledUnits } from './styled';

const Units = () => {
    const { defenders } = useSelector(state => state.units);
    const { activeDefenderId } = useSelector(state => state.app);

    const activeDefender = defenders.find(defender => defender.id === activeDefenderId);
    
    const renderUnits = defenders.map(unit => <Unit key={unit.id} unit={unit} />);

    return (
        <View
            borderWidth="thin"
            borderColor="dark"
            borderRadius="medium"
            paddingY="size-150"
            paddingX="size-200"
        >
            <Heading level={2}>Units</Heading>
            <StyledUnits>
                {renderUnits}
            </StyledUnits>
            <ActionDialog unit={activeDefender} />
        </View>
    );
};

export default Units;
