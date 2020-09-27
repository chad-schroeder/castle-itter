import React from 'react';
import { useSelector } from 'react-redux';

const Units = () => {
    const { friendly, enemy } = useSelector(state => state.units);

    return null;
};

export default Units;
