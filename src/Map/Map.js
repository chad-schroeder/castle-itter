import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Tile from '../Tile';

import { StyledMap } from './styled';

const Map = () => {
    const { tiles } = useSelector(state => state.map);
    const { allies, axis } = useSelector(state => state.units);
    
    return (
        <>
            <div>
                {tiles.map(tile => <Tile key={tile.id} {...tile} />)}
            </div>
            {/* <StyledMap /> */}
        </>
    );
};

export default Map;
