import React from 'react';
import { useSelector } from 'react-redux';

const Units = () => {
    const { allies } = useSelector(state => state.units.allies);

    return (
        <div>
            <p>Units</p>
        </div>
    );
};

export default Units;
