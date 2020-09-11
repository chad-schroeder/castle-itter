import React from 'react';
import { useSelector } from 'react-redux';

const Units = () => {
    const { allied, axis } = useSelector(state => state.units);

    return (
        <div>
            <h2>Units</h2>
            <p>Allied: {Object.keys(allied.combatants).length}</p>
            <p>Axis: {Object.keys(axis.combatants).length}</p>
        </div>
    );
};

export default Units;
