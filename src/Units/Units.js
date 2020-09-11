import React from 'react';
import { useSelector } from 'react-redux';

const Units = () => {
    const { soldiers, reinforcements, prisoners } = useSelector(state => state.units);

    return (
        <div>
            <p>{soldiers}</p>
            <p>{prisoners}</p>
            <p>{reinforcements}</p>
        </div>
    );
};

export default Units;
