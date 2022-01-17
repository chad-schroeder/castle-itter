import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Unit from '../Unit';

import { Heading, View } from '@adobe/react-spectrum';

import { StyledUnits } from './styled';

const Units = () => {
    const { activeUnit } = useSelector(state => state.app);
    const { locations, tiles } = useSelector(state => state.map);
    const { allies } = useSelector(state => state.units);

    const dispatch = useDispatch();

    const onClick = unit => {
        dispatch({ type: 'SET_ACTIVE_UNIT', payload: unit });
    };

    const renderUnits = allies.map(unit => {
        return (
            <Unit 
                key={unit.id} 
                unit={unit}
                onClick={onClick}
            />
        );
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
