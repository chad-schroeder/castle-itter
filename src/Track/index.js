import React from 'react';

import Counter from '../Counter';

import { LOS_COLORS } from '../constants';

import { Heading } from '@adobe/react-spectrum';

import { StyledContainer, StyledCounter } from './styled';

const Track = ({ track }) => {
    const { id, los, next, counter = {}, suppress = [] } = track;

    return (
        <StyledContainer>
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
