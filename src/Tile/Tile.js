import React from 'react';
import classNames from 'classnames';

import { StyledSpinner } from './styled';;

const getLocalUnits = (locationTiles = [], tiles = [], skipId = null) => {
    const allies = tiles
        .filter(tile => 
            locationTiles.includes(tile.id) 
            && tile.unit 
            && tile.unit !== skipId)
        .map(tile => tile.unit);

    return allies;
};

const getInspiringUnits = (localUnits, allies) => {
    const inspireUnits = [];

    Object.keys(allies).forEach(ally => {
        const unit = allies[ally];

        if (localUnits.includes(unit.id) && unit.inspire && !unit.tokens.disabled) {
            inspireUnits.push(unit.id);
        }
    });

    if (inspireUnits.length) return true;
    return false;
};

const checkInspired = (locationTiles = [], tiles = [], allies = {}, skipId = null) => {
    // get units at location, excluding current unit, if any
    const localUnits = getLocalUnits(locationTiles, tiles, skipId);

    if (localUnits.length) {
        // check for inspire units at location
        const inspired = getInspiringUnits(localUnits, allies);

        if (inspired) {
            return true;
        }
    }
    
    return false;
};

const Tile = ({ tile, tiles, location, allies, highlight }) => {
    const { id: tileId, los, unit: ally, armament } = tile;
    const { tiles: locationTiles } = location;
    const unit = allies[ally];

    const inspired = checkInspired(locationTiles, tiles, allies, unit?.id);

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
            <td className={classNames({
                'hl-inspired': inspired,
            })}>
                {attack}
            </td>
            <td className={classNames({
                'hl-inspired': inspired,
            })}>
                {suppress}
            </td>
            <td>{armament && armament.name}</td>
        </tr>
    );
};

export default Tile;
