import React from 'react';

import { Heading } from '@adobe/react-spectrum';

import { StyledContainer } from './styled';

const Location = ({ location }) => {
    const { id, defense } = location;

    return (
        <StyledContainer>
            <Heading level={5}>{id}</Heading>
            <Heading level={4}>{defense}</Heading>
        </StyledContainer>
    );
};

export default Location;
