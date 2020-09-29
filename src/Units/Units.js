import React from 'react';
import { useSelector } from 'react-redux';

const Units = () => {
    const { allies, axis } = useSelector(state => state.units);

    return null;
};

export default Units;
