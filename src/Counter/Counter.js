import React from 'react';
import { useSelector } from 'react-redux';

const Counter = type => {
    const { axis } = useSelector(state => state.units);

    const { name, defense } = axis.find(unit => unit.id === type);

    return (
        <p>Enemy: {name} | Defense: {defense}</p>
    );
};

export default Counter;
