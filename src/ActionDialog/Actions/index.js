import React from 'react';

// import ActionMove       from '../Actions/ActionMove';
// import ActionMoveWithin from '../Actions/ActionMoveWithin';
// import ActionAttack     from '../Actions/ActionAttack';
// import ActionRecover    from '../Actions/ActionRecover';

import { canTakeAction } from 'Utils/Units/checks';

import { ActionGroup, Flex, Item, Heading, Text, Divider, } from '@adobe/react-spectrum';

import Switch     from '@spectrum-icons/workflow/Switch';
import Crosshairs from '@spectrum-icons/workflow/Crosshairs';
import Wrench     from '@spectrum-icons/workflow/Wrench';
import Feature    from '@spectrum-icons/workflow/Feature';
import Follow     from '@spectrum-icons/workflow/Follow';
import Move       from '@spectrum-icons/workflow/Move';
import Relevance  from '@spectrum-icons/workflow/Relevance';
import SpotHeal   from '@spectrum-icons/workflow/SpotHeal';

const Actions = ({ unit, action, onAction }) => {
    return (
        <>
        {canTakeAction(unit) && (
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

                            <Item key="command">
                                <Feature />
                                <Text>Command</Text>
                            </Item>
                            
                            <Item key="escape">
                                <Follow />
                                <Text>Escape</Text>
                            </Item>
        
                            <Item key="load">
                                <Wrench />
                                <Text>Load</Text>
                            </Item>
                        </ActionGroup>
        
                        {/* {action === 'Move' && (
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
                        )} */}
                    </Flex>
                </Flex>
                </>
            )}
        </>
    )
};

export default Actions;