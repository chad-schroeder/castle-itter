import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ActionMove from '../ActionMove';

import Suppress from '../Utils/Actions/suppress';
import { getDefenderById } from '../Utils/Units/defenders';
import { 
    toggleOrdered, toggleCommanded, toggleDisrupted, toggleExhaustion, toggleCasualty, loadTankCannon,
} from '../Utils/Units/update';

import { ActionButton, ActionGroup, Flex, Grid, Item, Picker, View, Heading, Text, } from '@adobe/react-spectrum';
import Cancel from '@spectrum-icons/workflow/Cancel';
import Switch from '@spectrum-icons/workflow/Switch';
import Crosshairs from '@spectrum-icons/workflow/Crosshairs';
import Wrench from '@spectrum-icons/workflow/Wrench';
import Feature from '@spectrum-icons/workflow/Feature';
import Follow from '@spectrum-icons/workflow/Follow';
import Move from '@spectrum-icons/workflow/Move';
import Relevance from '@spectrum-icons/workflow/Relevance';
import SpotHeal from '@spectrum-icons/workflow/SpotHeal';

const ActionDialog = () => {
    const { activeDefender } = useSelector(state => state.app);
    const [action, setAction] = useState(null);
    const dispatch = useDispatch();

    if (activeDefender) {
        const unit = getDefenderById(activeDefender);
        const { 
            id, 
            name,
            tanker,
            commander,
            escape,
            mobilized,
            tile, 
        } = unit;

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
        
                            <Item key="deactivate">
                                <Cancel />
                                <Text>Cancel</Text>
                            </Item>
                        </ActionGroup>
        
                        {action === 'suppress' && (
                            <Suppress unit={unit} />                                
                        )}
        
                        {action === 'move' && (
                            <ActionMove unit={unit} />
                        )}
                    </Flex>
                </View>
            )
        };

        const onDeactivate = () => {
            setAction(null);
            dispatch({ type: 'UNSET_ACTIVE_DEFENDER' });
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
                        <ActionButton>
                            {tile ? tile : '-'}
                        </ActionButton>   
                    </Flex>
                    {mobilized && getActionButtons()}
                    {mobilized && getToggleButtons()}
                </Flex>
            </View>
        );
    }
    return null;
};

export default ActionDialog;
