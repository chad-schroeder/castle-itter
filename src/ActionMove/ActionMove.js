import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ActionButton, Flex, Heading, Picker, Item, } from '@adobe/react-spectrum';

const ActionMove = () => {
    const { tiles } = useSelector(state => state.map);
    
    return (
        <>
            <Heading level={4}>Move</Heading>
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
                >
                    {(item) => <Item>{item.id}</Item>}
                </Picker>
            </Flex>
        </>
    );
};

export default ActionMove;
