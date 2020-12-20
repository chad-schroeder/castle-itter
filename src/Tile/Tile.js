import React from 'react';

import { StyledSpinner } from './styled';

const checkInspired = (locationId, inspire = [], skipId = null) => {
    // units in the cellar cannot be inspired
    if (locationId === 'C') return false;

    const inspired = inspire.some(id => id !== skipId);
    if (inspired) return true;
    return false;
};

const Tile = ({ tile, location, allies, highlight }) => {
    const { id: tileId, los, unit: ally, armament } = tile;
    const { id: locationId, tiles: locationTiles, inspire } = location;
    const unit = allies[ally];
    const inspired = checkInspired(locationId, inspire, unit?.id);
    let attack = 0;
    let suppress = 0;

    if (unit) {
        attack = unit.attack;
        suppress = unit.suppress;

        if (inspired) {
            attack += 1;
            suppress += 1;
        }
    }

    return (
        <tr>
            <StyledSpinner highlight={highlight} unit={unit}>
                <img src="images/select.svg" alt="Indicator" />
            </StyledSpinner>
            <td>{tileId}</td>
            <td>{location.id}</td>
            <td>{los.map(sight => `${sight}`).join(', ')}</td>
            <td>{unit && unit.id}</td>
            <td>{attack}</td>
            <td>{suppress}</td>
            <td>{armament && armament.name}</td>
        </tr>
    );
};

export default Tile;
