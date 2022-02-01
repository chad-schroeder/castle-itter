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
            <Divider size="L" />
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
                            backgroundColor="gray-50"
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
                            backgroundColor="gray-50"
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
                            backgroundColor="gray-50"
                        >
                            <Flex direction="column" alignItems="center" gap="size-100">
                                <User />
                                1 player
                            </Flex>
                        </View>
                    </Flex>
                </Well>
                <Text>
                    The Battle for Castle Itter was fought near the Austrian village of Itter on 5 May 1945, in the last days of the WWII. U.S soldiers joined forces with Wehrmacht infantrymen, a former SS officer, an Austrian resistance fighter, and recently-freed French prisoners of war to defend the Austrian castle against an attacking force from the 17th SS Panzergrenadier Division.
                </Text>
                <Heading level={3} marginTop="size-300">Object of the Game</Heading>
                <Text>
                    The goal of <strong>Castle Itter</strong> is to play through and exhaust the SS deck of assault cards or last until reinforcements from the 142nd Infantry Regiment arrive, without allowing SS counters to reach the castle. You score points for each Defender that survives the assault and lose points for each SS counter remaining on the board at the end of the game &mdash; the higher your score, the better.
                </Text>
            </Content>
            <ButtonGroup>
                <Button variant="cta" onPress={dialog.dismiss} autoFocus>Play</Button>
            </ButtonGroup>
        </Dialog>
    );
};

export default GameStart;
