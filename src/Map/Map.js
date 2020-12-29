import React, { useState } from 'react';

import Tile from '../Tile';
import Unit from '../Unit';

// import { isInspired } from 'Utils/Modifiers/inspire';

import { Heading, View, DialogContainer, ActionButton } from '@adobe/react-spectrum';
import { StyledTable, StyledTiles } from './styled';

const Map = ({ tiles, locations, tracks, allies }) => {
    const [tileDialog, setTileDialog] = useState(false);

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

    const renderTile = tile => {
        return <Tile key={tile.id} tile={tile} />;
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
                <StyledTiles>
                    {tiles.map(tile => renderTile(tile))}
                </StyledTiles>
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
                            <th>Tile</th>
                            <th>Nation</th>
                            <th className="align-right">Attack</th>
                            <th className="align-right">Suppress</th>
                            <th className="align-center">C</th>
                            <th className="align-center">T</th>
                            <th className="align-center">Ordered</th>
                            <th className="align-center">Commanded</th>
                            <th className="align-center">Disrupted</th>
                            <th className="align-center">Exhausted</th>
                            <th className="align-center">Casualty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayAllies(allies)}
                    </tbody>
                </StyledTable>
            </View>
            <DialogContainer onDismiss={() => setTileDialog(false)} isDismissable>
                {tileDialog && (
                    <>
                        <h2>Tile Dialog</h2>
                        <ActionButton onPress={() => setTileDialog(false)}>
                            Close
                        </ActionButton>
                    </>
                )}
            </DialogContainer>
        </>
    );
};

export default Map;
