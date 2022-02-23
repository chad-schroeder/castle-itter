import React from 'react';

import { ActionButton, Flex, View } from '@adobe/react-spectrum';

import { LOS_COLORS } from '../../../../constants';

import { StyledCount } from './styled';

import ChevronUp from '@spectrum-icons/workflow/ChevronUp';
import ChevronDown from '@spectrum-icons/workflow/ChevronDown';

const ColorBox = ({ count, color, increment, decrement, points }) => {
    return (
        <View backgroundColor={LOS_COLORS[color]} width={'20%'}>
            <Flex direction="column" alignItems="center" gap="size-100">
                <ActionButton 
                    isQuiet
                    isDisabled={points === 0}
                    onPress={() => increment(color)}
                >
                    <ChevronUp />
                </ActionButton>
                <StyledCount>{count}</StyledCount>
                <ActionButton 
                    isQuiet
                    isDisabled={count < 1}
                    onPress={() => decrement(color)}
                >
                    <ChevronDown />
                </ActionButton>
            </Flex>
        </View>
    );
};

export default ColorBox;
