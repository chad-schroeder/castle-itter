import React from 'react';
import { useDispatch } from 'react-redux';

import { ActionGroup, Heading, Item, Flex, } from '@adobe/react-spectrum';

const ActionRecover = ({ unit }) => {
    const dispatch = useDispatch();

    const onRecover = action => {
        dispatch({ 
            type: 'UPDATE_DEFENDER',
            payload: {
                ...unit,
                [action]: false,
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
                <Heading level={5}>Recover</Heading>
                <ActionGroup onAction={onRecover}>
                    <Item key="disrupted">Disruption</Item>
                    <Item key="exhausted">Exhaustion</Item>
                </ActionGroup>
            </Flex>
        </>
    );
};

export default ActionRecover;
