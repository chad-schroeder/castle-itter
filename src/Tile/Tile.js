import React from 'react';

const Tile = ({ id, location, los, unit, armament }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{location}</td>
            <td>{los.map(sight => `${sight}`).join(', ')}</td>
            <td>{unit && unit}</td>
            <td>{armament && armament.name}</td>
        </tr>
    );
};

export default Tile;
