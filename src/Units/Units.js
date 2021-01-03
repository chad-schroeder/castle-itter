import React from 'react';

import Unit from '../Unit';

import { StyledUnits } from './styled';

const Units = ({ units = {}, tiles = [], onUnitClick }) => {
    const renderUnits = units => {
        return Object.keys(units).map(ally => {
            const unit = units[ally];
            const tile = tiles.find(tile => tile.id === unit.tile) || {};
            let isInspired = false;

            return (
                <Unit 
                    key={unit.id} 
                    unit={unit}
                    tile={tile}
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
