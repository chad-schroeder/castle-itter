import React, { useState }          from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Actions from './Actions';
import Toggles from './Toggles';

import { ActionButton, ActionGroup, Flex, Item, View, Heading, Divider, } from '@adobe/react-spectrum';

import Cancel from '@spectrum-icons/workflow/Cancel';

const ActionDialog = ({ unit }) => {
    const { currentAction } = useSelector(state => state.app);
    const dispatch = useDispatch();

    if (unit) {
        const { 
            name,
            tanker,
            commander,
            inspire,
            officer,
            morale,
            tile, 
        } = unit;

        const onAction = action => {
            dispatch({ type: 'SET_CURRENT_ACTION', payload: action });
        };
    
        const onCancel = () => {
            dispatch({ type: 'UNSET_CURRENT_ACTION' });
            dispatch({ type: 'UNSET_ACTIVE_DEFENDER_ID' });
        };
    
        return (
            <View
                borderWidth="thin"
                borderColor="dark"
                borderRadius="medium"
                marginY="size-200"
                paddingY="size-125"
                paddingX="size-200"
            >
                <Flex direction="column" gap="size-100">
                    <Flex direction="row" gap="size-100" alignItems="center" gridArea="unit">
                        <Heading level={4}>{name}</Heading>
                        <ActionGroup density="compact">
                            <Item>
                                {tile ? tile : '-'}
                            </Item>
                            {commander && (
                                <Item>
                                    C
                                </Item>
                            )}
                            {inspire && (
                                <Item>
                                    I
                                </Item>
                            )}
                            {tanker && (
                                <Item>
                                    T
                                </Item>
                            )}
                            {officer && (
                                <Item>
                                    O
                                </Item>
                            )}
                            {morale && (
                                <Item>
                                    M
                                </Item>
                            )}
                        </ActionGroup>
                        <Actions unit={unit} action={currentAction} onAction={onAction} />
                        <Divider orientation="vertical" size="S" />
                        <Toggles unit={unit} />
                        <Divider orientation="vertical" size="S" />
                        <ActionButton onPress={onCancel}>
                            <Cancel />
                        </ActionButton>
                    </Flex>
                </Flex>
            </View>
        );
    }
    return null;
};

export default ActionDialog;
