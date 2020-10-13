import React from 'react';

import { StyledContainer, StyledHeading, StyledTagline, } from './styled';

const Score = ({ score, award, victory }) => {
    return (
        <StyledContainer>
            <StyledHeading>{victory}</StyledHeading>
            {award  && <h2>{award}</h2>}
            <StyledTagline>Score: {score}</StyledTagline>
        </StyledContainer>
    );
};

export default Score;
