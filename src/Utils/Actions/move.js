import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ActionButton, Flex, Heading, Text, View } from '@adobe/react-spectrum';

// export const moveDefender = (unit, toTileId) => {
//     // get new tile stats
//     const { 
//         tile: tileId, 
//         location, 
//         los, 
//         armament = null,
//     } = tiles.find(tile => tile.id === toTileId);

//     const movedUnit = {
//         ...unit,
//         tileId,
//         location,
//         los,
//         armament,
//     }

//     dispatch({
//         type: 'UPDATE_DEFENDER', 
//         payload: movedUnit,
//     });
// };

const Move = (unit, toTileId) => {
    const tiles = useSelector(state => state.app);
    const dispatch = useDispatch();

    return (
        <>
            <Heading level={4}>Move</Heading>
            <Flex direction="row" justifyContent="center" gap="size-100">
                
            </Flex>
        </>
    );
};

export default Move;
