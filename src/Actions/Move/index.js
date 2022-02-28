import React           from 'react';
import { useDispatch } from 'react-redux';

import { getUnoccupiedTiles } from 'Utils/Libs/movement';

import { Flex, Picker, Item } from '@adobe/react-spectrum';

const Move = ({ unit }) => {
    const tiles = getUnoccupiedTiles();
    const dispatch = useDispatch();

    const onMove = tileId => {
        const tile = tiles.find(tile => tile.id === tileId);
        const { location, los = [], armament = null } = tile;

        dispatch({ 
            type: 'UPDATE_DEFENDER', 
            payload: {
                ...unit,
                tile: tileId,
                location,
                los,
                armament,
            },
        });
        dispatch({ type: 'UNSET_CURRENT_ACTION' });
    };
    
    return (
        <>
            <Flex 
                direction="row" 
                justifyContent="center" 
                alignItems="center" 
                gap="size-100"
            >
                <Picker
                    label="Move to"
                    labelPosition="side" 
                    labelAlign="end"
                    placeholder="Select a tile"
                    items={tiles}
                    onSelectionChange={selected => onMove(selected)}
                >
                    {(item) => <Item>{item.id}</Item>}
                </Picker>
            </Flex>
        </>
    );
};

export default Move;
