import styled from 'styled-components';
import theme from 'Utils/Styles/theme';

export const StyledContainer = styled.div`
    position: relative;
    padding: 12px;
    width: 300px;
    background: white;
    border-radius: 12px;
    box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.4);
`;

export const StyledHeader = styled.header`
    height: 200px;
    padding: 20px;
    background: ${theme.colors.red};
    border-radius: 8px 8px 0 0;
    border-bottom: 4px solid white;
`;

export const StyledBody = styled.div`
    height: 180px;
    padding: 20px;
    color: white;
    background: ${theme.colors.black};
    border-radius: 0 0 8px 8px;
`;

export const StyledTitle = styled.h3`
    font-size: 1.75rem;
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
`;

export const StyledCount = styled.div`
    margin-top: 4px;
    padding-top: 4px;
    font-size: 1.15rem;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    border-top: 1px solid white;
`;

export const StyledDeck = styled.div`
    position: absolute;
    top: 192px;
    right: 24px;
    display: inline-flex;
    justify-content: center;
    width: 40px;
    color: white;
    font-size: 1.25rem;
    background-color: ${theme.colors.black};
    border: 3px solid white;
    border-radius: 50%;
`;
