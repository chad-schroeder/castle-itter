import React from 'react';
import { useSelector } from 'react-redux';

const Map = () => {
    const { spaces } = useSelector(state => state.map);

    return (
        <div>
            <p>Map</p>
        </div>
    );
};

export default Map;
