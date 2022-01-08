import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Unit from '../Unit';

import { Heading, View } from '@adobe/react-spectrum';

import { StyledUnits } from './styled';

const Units = () => {
    const { activeUnit } = useSelector(state => state.common);
    const { tiles } = useSelector(state => state.map);
    const { allies } = useSelector(state => state.units);

    const dispatch = useDispatch();

    const onClick = unit => {
        dispatch({ type: 'SET_ACTIVE_UNIT', payload: unit });
    };

    const renderUnits = allies => {
        return Object.keys(allies).map(ally => {
            const unit = allies[ally];
            const tile = tiles.find(tile => tile.id === unit.tile);
            const { los, armament = 0 } = tile;
            const isActive = activeUnit?.id === unit.id;
            
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
                    onClick={onClick}
                />
            );
        });
    };

    return (
        <View
            borderWidth="thin"
            borderColor="dark"
            borderRadius="medium"
            marginY="size-200"
            paddingY="size-150"
            paddingX="size-200"
        >
            <Heading level={2} marginBottom="size-100">Units</Heading>
            <StyledUnits>
                {renderUnits(allies)}
            </StyledUnits>
        </View>
    );
};

export default Units;
