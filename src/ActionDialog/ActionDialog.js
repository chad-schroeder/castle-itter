import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

    const dispatch = useDispatch();

    if (activeDefender) {
        const unit = getDefenderById(activeDefender);
        const { id, name, tileId, casualty, escape } = unit;

        const onDeactivate = () => {
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
                <Heading level={3} marginBottom="size-100">Unit Actions</Heading>

                <Grid
                    areas={[
                        'unit',
                        'message',
                    ]}
                    rows={['auto', 'auto', 'auto', 'auto']}
                    gap="size-100">

                    <View
                        borderWidth="thin"
                        borderColor="dark"
                        borderRadius="medium"
                        paddingY="size-125"
                        paddingX="size-200"
                    >
                        <Flex direction="row" gap="size-100" alignItems="center">
                            <p>Actions:</p>
                            <ActionGroup 
                                density="compact"
                                buttonLabelBehavior="hide"
                                selectionMode="single"
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
                                <Item key="swap">
                                    <Switch />
                                    <Text>Move Within</Text>
                                </Item>
                                <Item key="recover">
                                    <SpotHeal />
                                    <Text>Recover</Text>
                                </Item>
                                <Item key="command">
                                    <Feature />
                                    <Text>Command</Text>
                                </Item>
                                {escape && (
                                    <Item key="escape">
                                        <Follow />
                                        <Text>Escape</Text>
                                    </Item>
                                )}
                                {tileId === 'BJ1' && (
                                    <Item key="load">
                                        <Wrench />
                                        <Text>Load</Text>
                                    </Item>
                                )}
                            </ActionGroup>
                        </Flex>
                    </View>

                    <Flex direction="row" gap="size-100" alignItems="center" gridArea="unit">
                        <p>{name}</p>
                        <ActionButton>
                            {tileId}
                        </ActionButton>
                            <>
                                <p>Toggles</p>
                                <ActionButton
                                    onPress={() => toggleExhaustion(id)}
                                    isDisabled={casualty}
                                >
                                    Exhausted
                                </ActionButton>

                                <ActionButton 
                                    onPress={() => toggleOrdered(id)}
                                    isDisabled={casualty}
                                >
                                    Ordered
                                </ActionButton>

                                <ActionButton
                                    onPress={() => toggleCommanded(id)}
                                    isDisabled={casualty}
                                >
                                    Commanded
                                </ActionButton>

                                <ActionButton 
                                    onPress={() => toggleDisrupted(id)}
                                    isDisabled={casualty}
                                >
                                    Disrupted
                                </ActionButton>

                                <ActionButton onPress={() => toggleCasualty(id)}>
                                    Casualty
                                </ActionButton>
                            
                                <ActionButton onPress={() => loadTankCannon()}>
                                    Load
                                </ActionButton>
                            </>

                            <ActionButton
                                aria-label="Deactivate unit"
                                onPress={onDeactivate}
                            >
                                <Cancel />
                            </ActionButton>
                    </Flex>
                </Grid>
            </View>
        );
    }
    return null;
};

export default ActionDialog;
