import React from 'react';

const Dice = ({ num, isAxis = false }) => {
    let cube = `die-${num}`;

    if (isAxis) {
        cube += '-axis';
    }

    return (
        <img src={`images/${cube}.svg`} width="50" height="50" alt={num} />
    )
};

export default Dice;
