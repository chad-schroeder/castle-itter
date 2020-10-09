import React from 'react';
import { useSelector } from 'react-redux';

const Tile = ({ id }) => {
    const { tiles } = useSelector(state => state.map);

    const { location, los, unit, armament } = tiles.find(tile => tile.id === id);

    const getArmament = () => {
        const { name, attack, suppress } = armament;

        return ` | Armament: ${name} | Attack: ${attack} | Suppress: ${suppress}`;
    }

    return (
        <p>
            Tile: {id} | 
            Location: {location} | 
            LOS: {los.map(sight => `${sight}`).join(', ')}
            {unit && ` | Unit: ${unit}`}
            {armament && getArmament()}
        </p>
    );
};

export default Tile;
