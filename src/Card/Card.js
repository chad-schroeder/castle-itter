import React from 'react';

import { StyledContainer, StyledHeader, StyledBody, StyledTitle, StyledCount, StyledDeck } from './styled';

const Card = ({ id, name, count, cardDeck }) => {
    if (id) {
        return (
            <StyledContainer key={id}>
                <StyledHeader />
                <StyledBody>
                    <StyledTitle>{name}</StyledTitle>
                    {count && <StyledCount>Deploy: {count}</StyledCount>}
                    <StyledDeck>{cardDeck}</StyledDeck>
                </StyledBody>
            </StyledContainer>
        );
    }
    return null;
};

export default Card;
