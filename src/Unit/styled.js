import styled, { css } from 'styled-components';

const tokens = css`
  display: none;
  position: absolute;
`;

export const StyledContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100px;
  cursor: pointer;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;

  &.is-active {
    border: 1px solid green;
  }

  &.is-exhausted {
    opacity: 0.5;
  }

  &.is-casualty {
    opacity: 0.2;
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
  }
`;

export const StyledDisrupted = styled.div`
  ${tokens}
  top: -10px;
  left: -10px;

  ${StyledContainer}.is-disrupted & {
    display: block;
  }
`;

export const StyledOrdered = styled.div`
  ${tokens}
  top: -10px;
  right: -10px;

  ${StyledContainer}.is-ordered & {
    display: block;
  }
`;
