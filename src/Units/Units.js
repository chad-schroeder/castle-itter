import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Unit from '../Unit';

import { isPhaseActive } from '../Utils/Units/checks';

import { Heading, View } from '@adobe/react-spectrum';

import { StyledUnits } from './styled';

const Units = () => {
    const { activeUnit, phase } = useSelector(state => state.app);
    const { tiles } = useSelector(state => state.map);
    const { allies } = useSelector(state => state.units);

    const dispatch = useDispatch();

    const onClick = unit => {
        dispatch({ type: 'SET_ACTIVE_UNIT', payload: unit });
    };

    const renderUnits = allies.map(unit => {
        const tile = tiles.find(tile => tile.id === unit.tile);
        const { los, armament = 0 } = tile;
        const isActive = activeUnit?.id === unit.id;
        const phaseActive = isPhaseActive(phase, unit.location);

        const unitObj = {
            ...unit,
            los,
            armament,
        };

        return (
            <Unit 
                key={unit.id} 
                unit={unitObj}
                isActive={isActive}
                isPhaseActive={phaseActive}
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
