import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Flex, Picker, Item, } from '@adobe/react-spectrum';

const ActionAttack = ({ unit }) => {
    const { tracks } = useSelector(state => state.map);
    const dispatch = useDispatch();

    return (
        <>
            <Flex 
                direction="row" 
                justifyContent="center" 
                alignItems="center" 
                gap="size-100"
            >
               
            </Flex>
        </>
    );
};

export default ActionAttack;
