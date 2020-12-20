import React from 'react';

import Tile from '../Tile';
import Unit from '../Unit';

import { Heading, View } from '@adobe/react-spectrum';

import { StyledTable } from './styled';

const Map = ({ tiles, locations, tracks, allies, highlight }) => {
    const displayAllies = allies => {
        return Object.keys(allies).map(ally => {
            return (
                <Unit 
                    key={ally} 
                    unit={allies[ally]}
                    locations={locations} 
                />
            );
        });
    };

    return (
        <>
            <View
                borderWidth="thin"
                borderColor="dark"
                borderRadius="medium"
                marginY="size-200"
                paddingY="size-150"
                paddingX="size-200"
            >
                <Heading level={2} marginBottom="size-100">Tiles</Heading>
                <StyledTable>
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Location</th>
                            <th>LOS</th>
                            <th>Unit</th>
                            <th>Attack</th>
                            <th>Suppress</th>
                            <th>Armament</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tiles.map(tile => { 
                            const { id, location: locationId } = tile;
                            const location = locations[locationId];

                            return (
                                <Tile 
                                    key={id} 
                                    tile={tile}
                                    location={location}
                                    allies={allies}
                                    highlight={highlight} 
                                />
                            );
                        })}
                    </tbody>
                </StyledTable>
            </View>
            <View
                borderWidth="thin"
                borderColor="dark"
                borderRadius="medium"
                marginY="size-200"
                paddingY="size-150"
                paddingX="size-200"
            >
                <Heading level={2} marginBottom="size-100">Units</Heading>
                <StyledTable>
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Nation</th>
                            <th className="align-right">A</th>
                            <th className="align-right">S</th>
                            <th className="align-center">C</th>
                            <th className="align-center">T</th>
                            <th>Ordered</th>
                            <th>Commanded</th>
                            <th>Disrupted</th>
                            <th>Exhausted</th>
                            <th>Casualty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayAllies(allies)}
                    </tbody>
                </StyledTable>
            </View>
        </>
    );
};

export default Map;
