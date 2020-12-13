import React from 'react';

import { StyledSpinner } from './styled';

const Tile = ({ tile, allies, highlight }) => {
    const { id, location, los, unit: ally, armament } = tile;
    const unit = allies[ally];
    console.log({ unit });

    return (
        <tr>
            <StyledSpinner highlight={highlight} unit={unit}>
                <img src="images/select.svg" alt="Indicator" />
            </StyledSpinner>
            <td>{id}</td>
            <td>{location}</td>
            <td>{los.map(sight => `${sight}`).join(', ')}</td>
            <td>{unit && unit.id}</td>
            <td>{armament && armament.name}</td>
        </tr>
    );
};

export default Tile;
