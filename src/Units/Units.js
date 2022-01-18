import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Unit from '../Unit';

import { Heading, View } from '@adobe/react-spectrum';

import { StyledUnits } from './styled';

const Units = () => {
    const { activeDefender } = useSelector(state => state.app);
    const { defenders } = useSelector(state => state.units);
    const dispatch = useDispatch();

    const onClick = id => {
        dispatch({ type: 'SET_ACTIVE_DEFENDER', payload: id });
    };

    const renderUnits = defenders.map(unit => {
        const isActive = unit.id === activeDefender;
        
        return (
            <Unit 
                key={unit.id} 
                unit={unit}
                isActive={isActive}
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
