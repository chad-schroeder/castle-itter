import React from 'react';

import { Units } from '../Units';
import Tiles from '../Tiles';
import Tracks from '../Tracks';

const Map = () => {
    return (
        <>
            <Tiles />
            <Tracks />
            <Units />
        </>
    );
};

export default Map;
