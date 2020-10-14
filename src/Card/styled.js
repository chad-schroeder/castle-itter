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
    height: 200px;
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

export const StyledBanner = styled.ul`
    display: inline-flex;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: ${theme.colors.black};

    li {
        display: block;
        position: relative;
        margin-right: 23px;
        padding: 0 10px 0 5px;
        height: 40px;
        color: white;
        text-decoration: none;
        text-align: center;
        line-height: 40px;
        background: #3498db;

        &:first-child {
            padding-left: 15px;
            border-radius: 0;

            &:before{
                border: none;
            }
        }

        &:last-child {
            margin-right: 0;
        }

        &:before,
        &:after {
            content: '';
            position: absolute;
            top: 0;
            border: 0 solid #3498db;
            border-width: 20px 10px;
            width: 0;
            height: 0;
        }

        &:before {
            left: -20px;
            border-left-color: transparent;
        }

        &:after {
            left: 100%;
            border-color: transparent;
            border-left-color: #3498db;
        }
    }
`;
