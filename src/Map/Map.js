import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Tile from '../Tile';

const Map = () => {
    const [tileId, setTileId] = useState('BJ4');
    
    const { tiles } = useSelector(state => state.map);
    
    const handleChange = (e) => {
        setTileId(e.target.value);
    };

    return (
        <div>
            <h2>Map</h2>
            <select onChange={handleChange}>
                {tiles.map(({ id }) => (
                    <option key={id} value={id}>
                        {id}
                    </option>
                ))}
            </select>
            <Tile id={tileId} />
        </div>
    );
};

export default Map;
