import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledCenter = styled.td`
    text-align: center;
`;

export const StyledRight = styled.td`
    text-align: right;
`;

export const StyledSpinner = styled.td`
    width: 60px;

    img { 
      display: none;
      animation: ${rotate} 4s linear infinite;

      ${({ highlight }) => highlight === 'moveWithin' && `
        display: block;
      `}
    }
`;