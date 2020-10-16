import styled from 'styled-components';
import theme from 'Utils/Styles/theme';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 74px;
    height: 74px;
    background-color: ${theme.colors.black};
    border-radius: 4px;
`;

export const StyledValues = styled.div`
    position: absolute;
    top: 0;
    right: 4px;

    span + span {
        margin-left: 4px;
    }
`;

export const StyledAttack = styled.span`
    padding: 2px;
    font-size: 0.8rem;
    color: ${theme.colors.black};
    background-color: white;
`;

export const StyledSuppress = styled.span`
    padding: 2px;
    font-size: 0.8rem;
    color: ${theme.colors.black};
    background-color: white;
`;

export const StyledModifiers = styled.div`
    padding: 4px;
    font-size: 0.7rem;
    color: ${theme.colors.black};
    background-color: white;
`;

export const StyledNationality = styled.div`
    padding: 4px;
    font-size: 0.7rem;
    color: white;
    background-color: #867e36;
`;

export const StyledFooter = styled.footer`
    margin-top: auto;
    padding: 4px;
    font-size: 0.7rem;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    color: white;
`;
