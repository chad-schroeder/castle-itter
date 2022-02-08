import React, { useState } from 'react';
import { useDispatch }     from 'react-redux';

import ActionMove       from '../Actions/ActionMove';
import ActionMoveWithin from '../Actions/ActionMoveWithin';
import ActionAttack     from '../Actions/ActionAttack';
import ActionRecover    from '../Actions/ActionRecover';

import { toggleOrdered, toggleCommanded, toggleDisrupted, toggleExhaustion, toggleCasualty, loadTankCannon, } from '../Utils/Units/update';

import { ActionButton, ActionGroup, Flex, Item, View, Heading, Text, Divider, } from '@adobe/react-spectrum';

import Cancel     from '@spectrum-icons/workflow/Cancel';
import Switch     from '@spectrum-icons/workflow/Switch';
import Crosshairs from '@spectrum-icons/workflow/Crosshairs';
import Wrench     from '@spectrum-icons/workflow/Wrench';
import Feature    from '@spectrum-icons/workflow/Feature';
import Follow     from '@spectrum-icons/workflow/Follow';
import Move       from '@spectrum-icons/workflow/Move';
import Relevance  from '@spectrum-icons/workflow/Relevance';
import SpotHeal   from '@spectrum-icons/workflow/SpotHeal';

const ActionDialog = ({ unit }) => {
    const [action, setAction] = useState(null);
    const dispatch = useDispatch();

    if (unit) {
        const { 
            id, 
            name,
            tanker,
            commander,
            inspire,
            officer,
            morale,
            escape,
            mobilized,
            tile, 
        } = unit;

        const onAction = action => {
            setAction(action);
            dispatch({ type: 'SET_CURRENT_ACTION', payload: action });
        };
    
        const onCancel = () => {
            console.log('onCancel');
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
                        {mobilized && (
                            <>
                                <Divider orientation="vertical" size="S" />
                                <Flex direction="row" gap="size-100" alignItems="center">
                                    <Flex direction="row" gap="size-100" alignItems="center">
                                        <Heading level={4}>Actions</Heading>
                                        <ActionGroup 
                                            density="compact"
                                            buttonLabelBehavior="hide"
                                            selectionMode="single"
                                            isEmphasized
                                            onAction={onAction}
                                        >
                                            <Item key="Attack">
                                                <Crosshairs />
                                                <Text>Attack</Text>
                                            </Item>
                        
                                            <Item key="Suppress">
                                                <Relevance />
                                                <Text>Suppress</Text>
                                            </Item>
                        
                                            <Item key="Move">
                                                <Move />
                                                <Text>Move</Text>
                                            </Item>
                        
                                            <Item key="Move Within">
                                                <Switch />
                                                <Text>Move Within</Text>
                                            </Item>
                        
                                            <Item key="Recover">
                                                <SpotHeal />
                                                <Text>Recover</Text>
                                            </Item>
                        
                                            {commander && (
                                                <Item key="command">
                                                    <Feature />
                                                    <Text>Command</Text>
                                                </Item>
                                            )}
                                            
                                            {escape && (
                                                <Item key="escape">
                                                    <Follow />
                                                    <Text>Escape</Text>
                                                </Item>
                                            )}
                        
                                            {tile === 'BJ1' && (
                                                <Item key="load">
                                                    <Wrench />
                                                    <Text>Load</Text>
                                                </Item>
                                            )}
                                        </ActionGroup>
                        
                                        {action === 'Move' && (
                                            <ActionMove unit={unit} />
                                        )}
                    
                                        {action === 'Move Within' && (
                                            <ActionMoveWithin unit={unit} />
                                        )}
                    
                                        {action === 'Attack' && (
                                            <ActionAttack unit={unit} />
                                        )}
                    
                                        {action === 'Recover' && (
                                            <ActionRecover unit={unit} />
                                        )}
                                    </Flex>
                                    <Divider orientation="vertical" size="S" />
                                    <Flex direction="row" gap="size-100" alignItems="center">
                                        <Heading level={4}>Toggles</Heading>
                                        <ActionButton onPress={() => toggleExhaustion(id)}>
                                            Exhausted
                                        </ActionButton>
                        
                                        <ActionButton onPress={() => toggleOrdered(id)}>
                                            Ordered
                                        </ActionButton>
                        
                                        <ActionButton onPress={() => toggleCommanded(id)}>
                                            Commanded
                                        </ActionButton>
                        
                                        <ActionButton onPress={() => toggleDisrupted(id)}>
                                            Disrupted
                                        </ActionButton>
                        
                                        <ActionButton onPress={() => toggleCasualty(id)}>
                                            Casualty
                                        </ActionButton>
                                    
                                        <ActionButton onPress={() => loadTankCannon()}>
                                            Load
                                        </ActionButton>
                                    </Flex>
                                </Flex>
                            </>
                        )}
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
