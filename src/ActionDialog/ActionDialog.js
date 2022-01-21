import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ActionMove from '../ActionMove';
import ActionMoveWithin from '../ActionMoveWithin';
import ActionAttack from '../ActionAttack';
import ActionRecover from '../ActionRecover';

import { 
    toggleOrdered, toggleCommanded, toggleDisrupted, toggleExhaustion, toggleCasualty, loadTankCannon,
} from '../Utils/Units/update';

import { ActionButton, ActionGroup, Flex, Item, View, Heading, Text, } from '@adobe/react-spectrum';

import Cancel from '@spectrum-icons/workflow/Cancel';
import Switch from '@spectrum-icons/workflow/Switch';
import Crosshairs from '@spectrum-icons/workflow/Crosshairs';
import Wrench from '@spectrum-icons/workflow/Wrench';
import Feature from '@spectrum-icons/workflow/Feature';
import Follow from '@spectrum-icons/workflow/Follow';
import Move from '@spectrum-icons/workflow/Move';
import Relevance from '@spectrum-icons/workflow/Relevance';
import SpotHeal from '@spectrum-icons/workflow/SpotHeal';

const ActionDialog = ({ unit }) => {
    const [action, setAction] = useState(null);
    const dispatch = useDispatch();
    
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

    const onCancel = () => {
        dispatch({ type: 'UNSET_ACTIVE_DEFENDER_ID' });
    };

    const getToggleButtons = () => {
        return (
            <View
                borderWidth="thin"
                borderColor="dark"
                borderRadius="medium"
                paddingY="size-125"
                paddingX="size-200"
            >
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
    
                    {/* <ActionButton
                        aria-label="Deactivate unit"
                        onPress={onDeactivate}
                    >
                        <Cancel />
                    </ActionButton> */}
                </Flex>
            </View>
        );
    }
    
    const getActionButtons = () => {
        return (
            <View
                borderWidth="thin"
                borderColor="dark"
                borderRadius="medium"
                paddingY="size-125"
                paddingX="size-200"
            >
                <Flex direction="row" gap="size-100" alignItems="center">
                    <Heading level={4}>Actions</Heading>
                    <ActionGroup 
                        density="compact"
                        buttonLabelBehavior="hide"
                        selectionMode="single"
                        isEmphasized
                        onAction={setAction}
                    >
                        <Item key="attack">
                            <Crosshairs />
                            <Text>Attack</Text>
                        </Item>
    
                        <Item key="suppress">
                            <Relevance />
                            <Text>Suppress</Text>
                        </Item>
    
                        <Item key="move">
                            <Move />
                            <Text>Move</Text>
                        </Item>
    
                        <Item key="moveWithin">
                            <Switch />
                            <Text>Move Within</Text>
                        </Item>
    
                        <Item key="recover">
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
    
                    {action === 'move' && (
                        <ActionMove unit={unit} />
                    )}

                    {action === 'moveWithin' && (
                        <ActionMoveWithin unit={unit} />
                    )}

                    {action === 'attack' && (
                        <ActionAttack unit={unit} />
                    )}

                    {action === 'recover' && (
                        <ActionRecover unit={unit} />
                    )}
                </Flex>
            </View>
        )
    };

    return (
        <View
            borderWidth="thin"
            borderColor="dark"
            borderRadius="medium"
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
                    <ActionButton onPress={onCancel}>
                        <Cancel />
                    </ActionButton>
                </Flex>
                {mobilized && getActionButtons()}
                {mobilized && getToggleButtons()}
            </Flex>
        </View>
    );

};

export default ActionDialog;
