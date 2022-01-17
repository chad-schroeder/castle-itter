import styled, { css } from 'styled-components';

const tokens = css`
  display: none;
  position: absolute;
`;

export const StyledContainer = styled.div`
  --border-color: black;

  display: inline-block;
  position: relative;
  width: 100px;
  cursor: pointer;
  background-color: white;
  border: 2px solid var(--border-color);
  border-radius: 4px;

  &.is-active {
    --border-color: yellowgreen;
  }

  &.is-exhausted {
    opacity: 0.5;
  }

  &.is-casualty {
    opacity: 0.5;
  }

  &.not-mobilized {
    --border-color: red;
  }
`;

export const StyledName = styled.h2`
  padding: 8px;
  font-size: 10px;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
`;

export const StyledNationality = styled.p`
  margin-bottom: 8px;
  font-size: 10px;
  text-align: center;
  text-transform: uppercase;
`;

export const StyledValues = styled.p`
  padding: 2px 8px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  background-color: black;
  border-radius: 0 0 2px 2px;

  ${StyledContainer}.is-inspired & {
    color: green;
  }
`;

export const StyledCommanded = styled.div`
  ${tokens}
  bottom: -14px;
  right: -10px;

  ${StyledContainer}.is-commanded & {
    display: block;

    img {
      border-radius: 50%;
    }
  }
`;

export const StyledDisrupted = styled.div`
  ${tokens}
  top: -10px;
  left: -10px;

  ${StyledContainer}.is-disrupted & {
    display: block;
    
    img {
      border-radius: 50%;
    }
  }
`;

export const StyledOrdered = styled.div`
  ${tokens}
  top: -10px;
  right: -10px;

  ${StyledContainer}.is-ordered & {
    display: block;
    
    img {
      border-radius: 50%;
    }
  }
`;
