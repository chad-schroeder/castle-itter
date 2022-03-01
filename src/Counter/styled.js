import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    padding: 6px;
    width: 80px;
    height: 80px;
    cursor: pointer;
    color: white;
    background-color: black;
    border-radius: 50%;

    &.is-active {
        background-color: var(--spectrum-global-color-red-500);
    }
`;
