import React from 'react';

const Tile = ({ id, location, los, unit, armament }) => {
    const getArmament = () => {
        const { name, attack, suppress } = armament;
        return ` | Armament: ${name} | Attack: ${attack} | Suppress: ${suppress}`;
    }

    return (
        <div>
            Tile: {id} | 
            Location: {location} |
            LOS: {los.map(sight => `${sight}`).join(', ')}
            {unit && ` | Unit: ${unit}`}
            {armament && getArmament()}
        </div>
    );
};

export default Tile;
