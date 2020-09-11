import React from 'react';
import { useSelector } from 'react-redux';

const Map = () => {
    const { locations } = useSelector(state => state.map);

    return (
        <div>
            <h2>Map</h2>
            <p>Locations: {Object.keys(locations).length}</p>
        </div>
    );
};

export default Map;
