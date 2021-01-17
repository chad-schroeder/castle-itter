import React from 'react';

import Unit from '../Unit';

import { StyledUnits } from './styled';

const Units = ({ units = {}, tiles = [], activeUnit = {}, selectedUnits = [], onUnitClick }) => {
    const renderUnits = units => {
        return Object.keys(units).map(ally => {
            const unit = units[ally];
            const id = unit.id;
            const tile = tiles.find(tile => tile.id === unit.tile) || {};
            let isActive = activeUnit.unitId === id ? true : false;
            let isSelectedUnit = selectedUnits.includes(id);
            let isInspired = false;

            return (
                <Unit 
                    key={id} 
                    unit={unit}
                    tile={tile}
                    isActive={isActive}
                    isSelected={isSelectedUnit}
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
