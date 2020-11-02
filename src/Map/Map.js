import React from 'react';
import { useSelector } from 'react-redux';

import Tile from '../Tile';

const Map = () => {
    const { tiles } = useSelector(state => state.map);

    return (
        <>
            <div>
                {tiles.map(tile => <Tile key={tile.id} {...tile} />)}
            </div>
        </>
    );
};

export default Map;
