import React from 'react';

import { StyledContainer, StyledHeader, StyledBody, StyledTitle, StyledStats, StyledDefense, StyledAttack, StyledCount, StyledDeck, } from './styled';

const Card = ({ id, name, count, attack, defense, cardDeck }) => {
    if (id) {
        return (
            <StyledContainer key={id}>
                <StyledHeader>
                    {(defense || attack) ?
                        <StyledStats>
                            {defense && <StyledDefense>{defense}</StyledDefense>}
                            {attack && <StyledAttack>{attack}</StyledAttack>}
                        </StyledStats>
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
