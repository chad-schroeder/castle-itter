import React from 'react';

import { ActionButton, Button, ButtonGroup, Content, Dialog, DialogTrigger, Divider, Flex, Heading, Text, View } from '@adobe/react-spectrum';

const Suppress = ({ unit })=> {
    const { los } = unit;

    const colors = {
        purple: 'purple-400',
        black: 'static-black',
        yellow: 'yellow-400',
        orange: 'orange-400',
        green: 'green-400',
    };

    return (
        <>
            <Heading>Suppress</Heading>
            <Divider />
            <Content>
            <Flex direction="row" justifyContent="center" gap="size-100">
                {los.map((target) => (
                    <View
                        key={target}
                        backgroundColor={colors[target]}
                        padding="size-500"
                    >
                        <ActionButton staticColor="white">
                            <Text>{target}</Text>
                        </ActionButton>
                    </View>
                ))}
            </Flex>
            </Content>
        </>
    );
};

export default Suppress;
