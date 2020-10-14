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
    background: ${theme.colors.red};
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

export const StyledBanner = styled.ul`
    display: inline-flex;
    flex-direction: column;
    position: absolute;
    top: 32px;
    right: 10px;
    margin: 0;
    padding: 0;
    list-style: none;

    &:after {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 0;
        height: 0;
        border: 0 solid white;
        border-color: transparent;
        border-top-color: #9e0000;
        border-width: 10px 20px;
    }

    li {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        position: relative;
        margin-bottom: 23px;
        width: 42px;
        height: 54px;
        color: white;
        font-size: 1.2rem;
        font-family: 'Oswald', sans-serif;
        text-decoration: none;
        text-align: center;
        background: #9e0000;

        &:before,
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 0;
            border: 0 solid #9e0000;
            border-width: 10px 21px;
        }

        &:before {
            top: -20px;
            border-top-color: transparent;
        }

        &:after {
            top: 100%;
            border-color: transparent;
            border-top-color: #9e0000;
        }

        &:first-child {
            border-radius: 0;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }
`;
