import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.td`
    width: 60px;

    img { 
      display: none;
      animation: ${rotate} 4s linear infinite;

      ${({ highlight, unit }) => (highlight === 'move' && !unit) && `
        display: block;
      `}
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 8px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 4px;
`;
