import React from 'react';
import classNames from 'classnames';

import { checkInspired } from 'Utils/Modifiers/inspire';

import { StyledSpinner, StyledCol } from './styled';;

const Tile = ({ tile, tiles, location, allies, highlight }) => {
    const { id: tileId, los, unit: ally, armament } = tile;
    const { id: locationId, tiles: locationTiles } = location;
    const unit = allies[ally];

    const inspired = checkInspired(locationId, locationTiles, tiles, allies, unit?.id);

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
            <StyledCol className={classNames({
                'hl-inspired': inspired,
            })}>
                {attack}
            </StyledCol>
            <StyledCol className={classNames({
                'hl-inspired': inspired,
            })}>
                {suppress}
            </StyledCol>
            <td>{armament && armament.name}</td>
        </tr>
    );
};

export default Tile;
