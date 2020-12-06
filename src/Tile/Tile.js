import React from 'react';
import { useSelector } from 'react-redux';

import { StyledSpinner } from './styled';

// mock Inspire
const checkInspired = () => true;

const Tile = ({ id, location, los, unit, armament, highlight }) => {
    const { allies } = useSelector(state => state.units);

    let combatant = allies[unit];
    let attackValue = combatant?.attack;
    let suppressValue = combatant?.suppress;

    if (combatant) {
        // check for unit at location with Inspire
        let inspired = checkInspired();

        // boost combat strength, if inspired
        if (inspired) {
            attackValue += 1;
            suppressValue += 1;
        }

        console.log({ combatant, attackValue, suppressValue });
    }
    
    return (
        <tr>
            <StyledSpinner highlight={highlight} unit={unit}>
                <img src="images/select.svg" alt="Indicator" />
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
