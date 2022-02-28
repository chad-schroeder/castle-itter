import React, { useState }          from 'react'
import { useSelector, useDispatch } from 'react-redux';

// import Move             from './Move';
// import Attack           from './Attack';
import Suppress from './Suppress';
import Recover  from './Recover';
import Restore  from './Restore';
// import Command          from './Command';
import Escape   from './Escape';
// import ActionMoveWithin from '../Old_Actions/ActionMoveWithin';
// import ActionAttack     from '../Old_Actions/ActionAttack';
// import ActionRecover    from '../Old_Actions/ActionRecover';

import { canTakeAction, canEscape, hasEscapeRoute } from 'Utils/Units/checks';

import { ActionGroup, Flex, Item, Heading, Text, Divider, } from '@adobe/react-spectrum';

import Switch     from '@spectrum-icons/workflow/Switch';
import Crosshairs from '@spectrum-icons/workflow/Crosshairs';
import Move       from '@spectrum-icons/workflow/Move';
import Relevance  from '@spectrum-icons/workflow/Relevance';
import FlashOff   from '@spectrum-icons/workflow/FlashOff';
import RotateCCW  from '@spectrum-icons/workflow/RotateCCW';
import Follow     from '@spectrum-icons/workflow/Follow';
import FollowOff  from '@spectrum-icons/workflow/FollowOff';

const Actions = ({ unit }) => {
    const { currentAction } = useSelector(state => state.app);
    const dispatch = useDispatch();
    
    const { attack, suppress, command, exhausted, disrupted, escape, los } = unit;
    const permitEscape = canEscape(unit) && hasEscapeRoute(los);

    const onAction = action => {
        dispatch({ type: 'SET_CURRENT_ACTION', payload: action });
    };

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
                            selectedKeys={[currentAction]}
                            onAction={onAction}
                        >
                            <Item key="Move">
                                <Move />
                                <Text>Move</Text>
                            </Item>
                            <Item key="MoveWithin">
                                <Switch />
                                <Text>Move Within</Text>
                            </Item>
                            <Item key="Attack">
                                <Crosshairs />
                                <Text>Attack</Text>
                            </Item>
                            <Item key="Suppress">
                                <Relevance />
                                <Text>Suppress</Text>
                            </Item>
                            {exhausted && (
                                <Item key="Recover">
                                    <RotateCCW />
                                    <Text>Recover</Text>
                                </Item>
                            )}
                            {disrupted && (
                                <Item key="Restore">
                                    <FlashOff />
                                    <Text>Restore</Text>
                                </Item>
                            )}
                            {escape && (
                                <Item key="Escape">
                                    {permitEscape ? <Follow /> : <FollowOff />}
                                    <Text>Escape</Text>
                                </Item>
                            )}
                        </ActionGroup>
                                
                        {currentAction === 'Suppress' && (
                            <Suppress unit={unit} />
                        )}
                        {currentAction === 'Recover' && (
                            <Recover unit={unit} />
                        )}
                        {currentAction === 'Restore' && (
                            <Restore unit={unit} />
                        )}
                        {currentAction === 'Escape' && (
                            <Escape unit={unit} />
                        )}
                     
                    </Flex>
                </Flex>
                </>
            )}
        </>
    )
};

export default Actions;
