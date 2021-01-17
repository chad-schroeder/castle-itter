import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Tile from '../Tile';
import { Units } from '../Units';
import ActionDialog from 'ActionDialog';

// import { isInspired } from 'Utils/Modifiers/inspire';

import { ActionButton, DialogContainer, Heading, Item, Picker, View, } from '@adobe/react-spectrum';
import { StyledTiles, } from './styled';

// const checkInspired = (unit = null, tiles = [], locations = [], allies = []) => {
//     const tile = tiles.find(tile => tile.id === unit.tile);

//     // if unit is on the map, check for inspired
//     if (tile) {
//         const { location } = tile;
//         const { tiles } = locations[location];

//         const inspireObj = {
//             locationId: location,
//             locationTiles: tiles,
//             tiles,
//             allies,
//             unit: unit.id,
//         };

//         const inspired = isInspired(inspireObj);

//         if (inspired) {
//             return true;
//         }
//     }

//     return false;
// };

const Map = () => {
    const { tiles, locations, tracks, } = useSelector(state => state.map);
    const { allies, axis } = useSelector(state => state.units);

    const [activeUnit, setActiveUnit] = useState({});
    const [tileDialog, setTileDialog] = useState(false);

    const onUnitClick = unitObj => {
        setActiveUnit(unitObj);
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
                <Units 
                    units={allies} 
                    tiles={tiles} 
                    activeUnit={activeUnit}
                    onUnitClick={onUnitClick} 
                />
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
            <View
                borderWidth="thin"
                borderColor="dark"
                borderRadius="medium"
                marginY="size-200"
                paddingY="size-125"
                paddingX="size-200"
            >
                <Heading level={3} marginBottom="size-100">Unit Actions</Heading>
                <ActionDialog unit={activeUnit} tiles={tiles} />
            </View>
        </>
    );
};

export default Map;
