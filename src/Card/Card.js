import React from 'react';

import {
    StyledContainer, StyledHeader, StyledBody, StyledTitle, StyledBanner, StyledCount, StyledDeck,
} from './styled';

const Card = ({ id, name, count, attack, defense, disrupt, cardDeck }) => {
    if (id) {
        return (
            <StyledContainer key={id}>
                <StyledHeader>
                    {(defense || attack) ?
                        <StyledBanner>
                            {defense && <li>{defense}</li>}
                            {attack && <li>{attack}</li>}
                        </StyledBanner>
                    : null}
                </StyledHeader>
                <StyledBody>
                    <StyledTitle>{name}</StyledTitle>
                    {count && <StyledCount>DEPLOY: {count}</StyledCount>}
                    <StyledDeck>{cardDeck}</StyledDeck>
                </StyledBody>
            </StyledContainer>
        );
    }
    return null;
};

export default Card;
