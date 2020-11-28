import React from 'react';

import Tile from '../Tile';
import Unit from '../Unit';

import { StyledTable } from './styled';

// return <td className="whiteSpaceNoWrap">{ this.state.freightRelayPrice[key] }</td>

const displayAllies = allies => {
    return Object.keys(allies).map(ally => {
        return <Unit key={ally} {...allies[ally]} />;
    });
};

const Map = ({ tiles, allies  }) => {
    return (
        <>
            <StyledTable>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Location</th>
                        <th>LOS</th>
                        <th>Unit</th>
                        <th>Armament</th>
                    </tr>
                </thead>
                <tbody>
                    {tiles.map(tile => <Tile key={tile.id} {...tile} />)}
                </tbody>
            </StyledTable>
            <StyledTable>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Nationality</th>
                        <th>Attack</th>
                        <th>Suppress</th>
                        <th>Commander</th>
                        <th>Tanker</th>
                        <th>Officer</th>
                        <th>Inspire</th>
                        <th>Sacrifice</th>
                        <th>Morale</th>
                        <th>Escape</th>
                        <th>Reinforcement</th>
                        <th>Exhausted</th>
                        <th>Casualty</th>
                    </tr>
                </thead>
                <tbody>
                    {displayAllies(allies)}
                </tbody>
            </StyledTable>
        </>
    );
};

export default Map;
