import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    position: relative;
    padding: 6px;
    width: 100px;
    height: 100px;
    border: 6px solid black;
    border-radius: 50%;
`;

export const StyledCounter = styled.div`
    position: absolute;
    top: 4px;
    left: 4px;
`;
