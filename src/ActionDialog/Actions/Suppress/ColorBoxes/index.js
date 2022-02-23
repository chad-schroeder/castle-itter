import React from 'react';

import ColorBox from '../ColorBox';

const ColorBoxes = ({ allocation, los, increment, decrement, points }) => {
    return (
        <>
            {los.map(color => {
                return (
                    <ColorBox 
                        key={color}
                        color={color}
                        count={allocation[color]}
                        increment={increment}
                        decrement={decrement}
                        points={points}
                    />
                )
            })}
        </>
    );
};

export default ColorBoxes;
