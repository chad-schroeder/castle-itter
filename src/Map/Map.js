import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Map = () => {
    const { locations, tiles } = useSelector(state => state.map);
    
    const [tileDetails, setTileDetails] = useState('');
    
    const handleChange = (e) => {
        const { id, location, los, unit } = tiles.find(tile => tile.id === e.target.value);

        const details = `
            Id: ${id} | 
            Location: ${location} | 
            LOS: ${los} | 
            Unit: ${unit}
        `;

        setTileDetails(details);
    };

    return (
        <div>
            <h2>Map</h2>
            <p>Locations: {locations.length}</p>
            <select onChange={handleChange}>
                {tiles.map(tile => (
                    <option
                        key={tile.id}
                        value={tile.id}
                    >
                        {tile.id}
                    </option>
                ))}
            </select>
            <p>Tile details</p>
            <p>{tileDetails}</p>
        </div>
    );
};

export default Map;
