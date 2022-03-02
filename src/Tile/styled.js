import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;

    padding: 6px;
    width: 80px;
    height: 80px;
    cursor: pointer;
    border: 2px solid black;
    border-radius: 6px;
`;

export const StyledColor = styled.div`
    width: var(--spectrum-global-dimension-size-300);
    height: var(--spectrum-global-dimension-size-300);
    background-color: var(${props => props.bgColor});
`;

export const StyledArmament = styled.span`
    flex: 1;

    font-size: 10px;
    text-align: right;
`;
