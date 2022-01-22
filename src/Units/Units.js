import React from 'react';
import { useSelector } from 'react-redux';

import Unit from '../Unit';

import { Heading, View } from '@adobe/react-spectrum';

import { StyledUnits } from './styled';

const Units = () => {
    const { defenders } = useSelector(state => state.units);

    const renderUnits = defenders.map(unit => {
        return <Unit key={unit.id} unit={unit} />;
    });

    return (
        <View
            borderWidth="thin"
            borderColor="dark"
            borderRadius="medium"
            paddingY="size-150"
            paddingX="size-200"
        >
            <Heading level={2} marginBottom="size-100">Units</Heading>
            <StyledUnits>
                {renderUnits}
            </StyledUnits>
        </View>
    );
};

export default Units;
