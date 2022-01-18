import React from 'react';

import { ActionButton, Flex, Heading, Text, View } from '@adobe/react-spectrum';

const colors = { 
    // yellow tracks can only be targeted by direct fire, and are thus omitted
    purple: 'purple-400',
    black: 'static-black',
    orange: 'orange-400',
    green: 'green-400',
};

const getLineOfSight = los => {
    if (!los.length) return 'Nothing to hit';

    return (
        <>
            {los.map((target) => {
                if (target === 'yellow') return '';

                return (
                    <View
                        key={target}
                        backgroundColor={colors[target]}
                        padding="size-100"
                    >
                        <ActionButton staticColor="white">
                            <Text>{target}</Text>
                        </ActionButton>
                    </View>
                );
            })}
        </>
    )
};

const Suppress = ({ unit })=> {
    const testLoS = ['purple', 'black', 'yellow', 'orange', 'green'];
    let { suppress, tanker, los, armament } = unit;

    if (tanker && armament) {
        suppress = armament.suppress;
    }

    return (
        <>
            <Heading level={4}>Suppress: {suppress}</Heading>
            <Flex direction="row" justifyContent="center" gap="size-100">
                {getLineOfSight(testLoS)}
            </Flex>
        </>
    );
};

export default Suppress;
