import React from 'react';
// import classNames from 'classnames';

import { LOS_COLORS } from '../constants';

import { Flex, Heading, View } from '@adobe/react-spectrum';

import Target from '@spectrum-icons/workflow/Target';
import EditCircle from '@spectrum-icons/workflow/EditCircle';

import { StyledContainer } from './styled';

const renderColorBox = color => {
    return <View key={color} backgroundColor={LOS_COLORS[color]} width="size-300" height="size-300" />;
};

const Tile = ({ tile }) => {
    const { id, los = [], armament } = tile;

    const renderLOS = los.map(renderColorBox);

    return (
        <StyledContainer>
            <Heading level={5}>{id}</Heading>
            <Flex 
                direction="row" 
                justifyContent="space-between"
                alignItems="center"
                gap="size-50"
            >
                {armament?.attack && <Target />}
                {armament?.load && <EditCircle />}
                {renderLOS}
            </Flex>
        </ StyledContainer>
    );
};

export default Tile;
