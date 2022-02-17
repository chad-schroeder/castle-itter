import React, { useState } from 'react';
import { useSelector }     from 'react-redux';

import Tile from '../Tile';

import { Heading, View, } from '@adobe/react-spectrum';

import { StyledTiles } from './styled';

const Tiles = () => {
    const { tiles } = useSelector(state => state.map);

    const renderTiles = tiles.map(tile => <Tile key={tile.id} tile={tile} />);

    return (
        <View
            borderWidth="thin"
            borderColor="dark"
            borderRadius="medium"
            paddingY="size-150"
            paddingX="size-200"
        >
            <Heading level={2} marginBottom="size-100">Tiles</Heading>
            <StyledTiles>
                {renderTiles}
            </StyledTiles>
        </View>
    );
};

export default Tiles;
