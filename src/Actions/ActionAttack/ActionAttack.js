import React from 'react';
import { useSelector } from 'react-redux';

import { Flex, Picker, Item, } from '@adobe/react-spectrum';

const Attack = ({ unit }) => {
    const { tracks } = useSelector(state => state.map);

    const onAttack = track => {
        console.log(track);
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
                    label="Target"
                    labelPosition="side" 
                    labelAlign="end"
                    placeholder="Select a track"
                    items={tracks}
                    onSelectionChange={selected => onAttack(selected)}
                >
                    {(item) => <Item>{item.id}</Item>}
                </Picker>
            </Flex>
        </>
    );
};

export default Attack;
