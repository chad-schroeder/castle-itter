import React from 'react';

import Counter from '../Counter';

import { LOS_COLORS } from '../constants';

import { Heading } from '@adobe/react-spectrum';

import { StyledContainer, StyledCounter } from './styled';

const Track = ({ track }) => {
    const { id, los, counter = {} } = track;

    return (
        <StyledContainer color={los}>
            <Heading level={4}>{id}</Heading>
            {counter && (
                <StyledCounter>
                    <Counter counter={counter} />
                </StyledCounter>
            )}
        </StyledContainer>
    );
};

export default Track;
