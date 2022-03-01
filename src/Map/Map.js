import React from 'react';

import { Units } from '../Units';
import Tiles     from '../Tiles';
import Locations from '../Locations';
import Tracks    from '../Tracks';

const Map = () => {
    return (
        <>
            <Units />
            <Locations />
            <Tiles />
            <Tracks />
        </>
    );
};

export default Map;
