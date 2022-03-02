import React from 'react';

import { ActionButton, Flex } from '@adobe/react-spectrum';

import { LOS_COLORS } from '../../../constants';

import { StyledContainer, StyledCount } from './styled';

import ChevronUp from '@spectrum-icons/workflow/ChevronUp';
import ChevronDown from '@spectrum-icons/workflow/ChevronDown';

const ColorBox = ({ count, color, increment, decrement, points }) => {
    return (
        <StyledContainer bgColor={LOS_COLORS[color]}>
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
        </StyledContainer>
    );
};

export default ColorBox;
