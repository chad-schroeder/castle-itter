import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Flex, Picker, Item, } from '@adobe/react-spectrum';

const ActionMoveWithin = ({ unit }) => {
    const { defenders } = useSelector(state => state.units);
    // const dispatch = useDispatch();

    const onMoveWithin = (activeDefender, passiveDefender) => {
        console.log(activeDefender, passiveDefender);
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
                    label="Switch"
                    labelPosition="side" 
                    labelAlign="end"
                    placeholder="Select a defender"
                    items={defenders}
                    onSelectionChange={selected => onMoveWithin(unit, selected)}
                >
                    {(item) => <Item>{item.name}</Item>}
                </Picker>
            </Flex>
        </>
    );
};

export default ActionMoveWithin;
