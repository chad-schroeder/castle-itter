import React from 'react';

import {
    StyledContainer, StyledValues, StyledAttack, StyledSuppress, StyledModifiers, StyledNationality, StyledFooter,
} from './styled';

const displayTypes = (modifiers) => {
    return Object.keys(modifiers)
        .map(key => key.charAt(0).toUpperCase())
        .join('/');
};

const Unit = ({ unit }) => {
    const { id, name, nationality, attack, suppress, modifiers } = unit;
    console.log('modifiers', modifiers);

    return (
        <StyledContainer id={id}>
            <StyledValues>
                <StyledAttack>{attack}</StyledAttack>
                <StyledSuppress>{suppress}</StyledSuppress>
            </StyledValues>
            <StyledNationality>{nationality}</StyledNationality>
            {modifiers &&
                <StyledModifiers>
                    {displayTypes(modifiers)}
                </StyledModifiers>
            }
            <StyledFooter>
                {name}
            </StyledFooter>
        </StyledContainer>
    );
};

export default Unit;
