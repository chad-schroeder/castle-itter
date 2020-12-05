import React from 'react';

import { StyledSpinner } from './styled';

const Tile = ({ id, location, los, unit, armament, highlight }) => {
    console.log({ unit });

    return (
        <tr>
            <StyledSpinner highlight={highlight} unit={unit}>
                <img src="images/select.svg" alt="" />
            </StyledSpinner>
            <td>{id}</td>
            <td>{location}</td>
            <td>{los.map(sight => `${sight}`).join(', ')}</td>
            <td>{unit && unit}</td>
            <td>{armament && armament.name}</td>
        </tr>
    );
};

export default Tile;
