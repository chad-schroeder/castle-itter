import React from 'react';
import { useSelector } from 'react-redux';

import Unit from '../Unit';

const Units = () => {
    const { allies } = useSelector(state => state.units);

    return (
        <div>
            <p>Units</p>
            <ul>
                {allies.map(ally => <Unit key={ally.id} unit={ally} />)}
            </ul>
        </div>
    )
};

export default Units;
