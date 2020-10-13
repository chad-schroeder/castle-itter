import styled from 'styled-components';
import theme from 'Utils/Styles/theme';

export const StyledContainer = styled.div`
    color: white;
    background: ${theme.colors.red};
`;

export const StyledHeading = styled.h1`
    font-size: ${theme.fonts.h1.fontSize};
    text-transform: ${theme.fonts.h1.textTransform};
`;

export const StyledTagline = styled.h3`
    font-size: ${theme.fonts.h3.fontSize};
    font-weight: normal;
    text-transform: ${theme.fonts.h3.textTransform};
`;