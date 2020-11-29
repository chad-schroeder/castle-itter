import React, { useState } from 'react';

import Tile from '../Tile';
import Unit from '../Unit';

import { Heading, RadioGroup, Radio, View } from '@adobe/react-spectrum';

import { StyledTable } from './styled';

// return <td className="whiteSpaceNoWrap">{ this.state.freightRelayPrice[key] }</td>

const displayAllies = allies => {
    return Object.keys(allies).map(ally => {
        return <Unit key={ally} {...allies[ally]} />;
    });
};

const Map = ({ tiles, allies  }) => {
    let [highlight, setHighlight] = useState('none');

    return (
        <>
            <View
                borderWidth="thin"
                borderColor="dark"
                borderRadius="medium"
                marginY="size-200"
                paddingY="size-125"
                paddingX="size-200"
            >
                <Heading level={3} marginBottom="size-100">Settings</Heading>
                <View
                    borderWidth="thin"
                    borderColor="dark"
                    borderRadius="medium"
                    paddingY="size-125"
                    paddingX="size-200"
                >
                    <RadioGroup 
                        label="Highlight Tiles" 
                        orientation="horizontal" 
                        value={highlight}
                        onChange={setHighlight}
                    >
                        <Radio value="none">None</Radio>
                        <Radio value="move">Move</Radio>
                    </RadioGroup>
                </View>
            </View>
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
            </View>
        </>
    );
};

export default Map;
