import React, { useState } from 'react';

import Tile from '../Tile';
import Unit from '../Unit';

import { isInspired } from 'Utils/Modifiers/inspire';

import { Heading, View, DialogContainer, ActionButton } from '@adobe/react-spectrum';
import { StyledTiles, StyledUnits } from './styled';

const checkInspired = (unit = null, tiles = [], locations = [], allies = []) => {
    const tile = tiles.find(tile => tile.id === unit.tile);

    // if unit is on the map, check for inspired
    if (tile) {
        const { location } = tile;
        const { tiles } = locations[location];

        const inspireObj = {
            locationId: location,
            locationTiles: tiles,
            tiles,
            allies,
            unit: unit.id,
        };

        const inspired = isInspired(inspireObj);

        if (inspired) {
            return true;
        }
    }

    return false;
};

const Map = ({ tiles, locations, tracks, allies }) => {
    const [tileDialog, setTileDialog] = useState(false);

    const renderAllies = allies => {
        return Object.keys(allies).map(ally => {
            const unit = allies[ally];
            let isInspired = checkInspired(unit, tiles, locations, allies);
            
            return (
                <Unit 
                    key={unit.id} 
                    unit={unit}
                    isInspired={isInspired}
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
                <StyledUnits>
                    {renderAllies(allies)}
                </StyledUnits>
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
