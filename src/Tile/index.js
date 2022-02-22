import React from 'react';
// import classNames from 'classnames';

import { LOS_COLORS } from '../constants';

import { Flex, Heading, View } from '@adobe/react-spectrum';

import { StyledContainer, StyledArmament } from './styled';

const renderColorBox = color => {
    return <View key={color} backgroundColor={LOS_COLORS[color]} width="size-300" height="size-300" />;
};

const Tile = ({ tile }) => {
    const { id, los = [], armament } = tile;

    const renderLOS = los.map(renderColorBox);

    return (
        <StyledContainer>
            <Heading level={5}>{id}</Heading>
            <StyledArmament>
                {armament?.name}
            </StyledArmament>
            <Flex 
                direction="row" 
                justifyContent="space-between"
                alignItems="center"
                gap="size-50"
            >
                {renderLOS}
            </Flex>
        </ StyledContainer>
    );
};

export default Tile;
