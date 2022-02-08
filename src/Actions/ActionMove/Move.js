import React                        from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Flex, Picker, Item, } from '@adobe/react-spectrum';

const ActionMove = ({ unit }) => {
    const { tiles } = useSelector(state => state.map);
    const dispatch = useDispatch();

    const onMove = toTileId => {
        const tile = tiles.find(tile => tile.id === toTileId);
        const { location, los = [], armament = null } = tile;

        dispatch({ 
            type: 'UPDATE_DEFENDER', 
            payload: {
                ...unit,
                tile: toTileId,
                location,
                los,
                armament,
            },
        });
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

export default ActionMove;
