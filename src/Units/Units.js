import React from 'react';
import { useSelector } from 'react-redux';

const Units = () => {
    const { friendly, enemy } = useSelector(state => state.units);

    return (
        <div>
            <h2>Units</h2>
            <p>Allied: {Object.keys(friendly.units).length}</p>
            <p>Axis: {Object.keys(enemy.units).length}</p>
        </div>
    );
};

export default Units;
