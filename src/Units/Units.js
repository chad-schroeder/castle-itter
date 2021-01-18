import React from 'react';

import Unit from '../Unit';

import { StyledUnits } from './styled';

const Units = ({ units = {}, tiles = [], activeUnit = {}, onUnitClick }) => {
    const renderUnits = units => {
        return Object.keys(units).map(ally => {
            const unit = units[ally];
            const tile = tiles.find(tile => tile.id === unit.tile) || {};
            const isActive = activeUnit.unitId === unit.id ? true : false;
            let isInspired = false;

            return (
                <Unit 
                    key={unit.id} 
                    unit={unit}
                    tile={tile}
                    isActive={isActive}
                    isInspired={isInspired}
                    onUnitClick={onUnitClick}
                />
            );
        });
    };

    return (
        <StyledUnits>
            {renderUnits(units)}
        </StyledUnits>
    );
};

export default Units;
