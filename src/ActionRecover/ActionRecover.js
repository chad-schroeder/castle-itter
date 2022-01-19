import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ActionGroup, Heading, Item, Flex, } from '@adobe/react-spectrum';

const ActionRecover = ({ unit }) => {
    // const dispatch = useDispatch();

    const onRecover = action => {
        console.log(action);
    };
    
    return (
        <>
            <Flex 
                direction="row" 
                justifyContent="center" 
                alignItems="center" 
                gap="size-100"
            >
                <Heading level={5}>Recover</Heading>
                <ActionGroup onAction={onRecover}>
                    <Item key="disruption">Disruption</Item>
                    <Item key="exhaustion">Exhaustion</Item>
                </ActionGroup>
            </Flex>
        </>
    );
};

export default ActionRecover;
