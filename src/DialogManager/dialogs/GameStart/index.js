import React from 'react';

import { useDialogContainer } from '@adobe/react-spectrum';

import { 
    Dialog, Heading, Content, Text, ButtonGroup, Button, Flex, View, Divider, Well,
} from '@adobe/react-spectrum';

import Clock       from '@spectrum-icons/workflow/Clock';
import User        from '@spectrum-icons/workflow/User';
import Visibility  from '@spectrum-icons/workflow/Visibility';

const GameStart = () => {
    const dialog = useDialogContainer();

    return (
        <Dialog size="L">
            <Heading level={1} marginX={'auto'}>
                <span style={{ fontSize: 20 }}>
                    Castle Itter: WWII tactical strongpoint defense game
                </span> 
            </Heading>
            <Divider />
            <Content>
                <Well marginBottom="size-300">
                    <Flex 
                        direction="row" 
                        justifyContent="center" 
                        gap="size-100"
                    >
                        <View
                            borderWidth="thin"
                            borderColor="dark"
                            borderRadius="medium"
                            padding="size-150"
                            width="size-1250"
                        >
                            <Flex direction="column" alignItems="center" gap="size-100">
                                <Clock />
                                60 minutes
                            </Flex>
                        </View>
                        <View
                            borderWidth="thin"
                            borderColor="dark"
                            borderRadius="medium"
                            padding="size-150"
                            width="size-1250"
                        >
                            <Flex direction="column" alignItems="center" gap="size-100">
                                <Visibility />
                                Ages 12+
                            </Flex>
                        </View>
                        <View
                            borderWidth="thin"
                            borderColor="dark"
                            borderRadius="medium"
                            padding="size-150"
                            width="size-1250"
                        >
                            <Flex direction="column" alignItems="center" gap="size-100">
                                <User />
                                1 player
                            </Flex>
                        </View>
                    </Flex>
                </Well>
                <Text>
                    In <strong>Castle Itter,</strong> you take control of a makeshift force that is defending a castle nestled in the Austrian countryside from a SS assault. The defending force consists of an American tank crew and infantrymen, Wehrmacht infantrymen, a former SS officer, French prisoners, and an Austrian resistance fighter.
                </Text>
                <Heading level={3} marginTop="size-300">Object of the Game</Heading>
                <Text>
                    The goal of <strong>Castle Itter</strong> is to last until reinforcements from the 142nd Infantry Regiment arrive. In the game, this is represented by playing through a deck of SS cards.
                </Text>
            </Content>
            <ButtonGroup>
                <Button variant="secondary" onPress={dialog.dismiss}>Cancel</Button>
            </ButtonGroup>
        </Dialog>
    );
};

export default GameStart;
