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
    position: relative;
    height: 220px;
    padding: 20px;
    background: #bebebe;
    border-radius: 8px 8px 0 0;
    border-bottom: 4px solid white;
`;

export const StyledBody = styled.div`
    height: 160px;
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
    top: 209px;
    right: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    color: white;
    font-size: 1.2rem;
    font-family: 'Oswald', sans-serif;
    background-color: ${theme.colors.black};
    border: 3px solid white;
    border-radius: 50%;
`;

export const StyledStats = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 20px;
    right: 8px;

    div + div {
        margin-top: 8px;
    }
`;

export const StyledDefense = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    font-size: 1.2rem;
    font-family: 'Oswald', sans-serif;
    color: black;
    background-color: white;
    border: 3px solid ${theme.colors.black};
    border-radius: 10px;
`;

export const StyledAttack = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    font-size: 1.2rem;
    font-family: 'Oswald', sans-serif;
    color: white;
    background-color: ${theme.colors.red};
    border: 3px solid white;
    border-radius: 10px;
`;
