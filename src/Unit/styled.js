import styled, { css } from 'styled-components';

const tokens = css`
  display: none;

  position: absolute;
  inset: 0;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--spectrum-global-color-static-white);
  border-radius: 50%;
`;

export const StyledContainer = styled.div`
  --color: var(--spectrum-global-color-static-black);
  --background-color: var(--spectrum-global-color-static-white);
  --border-color: var(--spectrum-global-color-static-black);

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 110px;
  color: var(--color);
  cursor: pointer;

  background-color: var(--background-color);
  border: 8px solid var(--border-color);
  border-radius: 50%;

  &.nationality-USA {
    --border-color: #117620;
  }

  &.nationality-GER {
    --border-color: #645656;
  }

  &.nationality-FRA {
    --border-color: #34629b;
  }

  &.nationality-AUS {
    --border-color: #ab1437;
  }

  &.is-exhausted {
    --border-color: var(--spectrum-global-color-static-yellow-500);
  }

  &.is-casualty {
    --border-color: var(--spectrum-global-color-static-red-700);
  }

  &.is-commanded {
    --border-color: orange;
  }

  &.is-ordered {
    --border-color: var(--spectrum-global-color-chartreuse-400);
  }

  &.is-escape {
    --border-color: var(--spectrum-global-color-static-purple-800);
  }

  &:is(.is-locked, .is-deactivated) {
    --border-color: var(--spectrum-global-color-static-red-600);
  }

  &.is-active {
    // --border-color: var(--spectrum-global-color-chartreuse-400);
  }
`;

export const StyledName = styled.h2`
  margin-bottom: 4px;
  font-size: 9px;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
`;

export const StyledValues = styled.p`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;

  ${StyledContainer}.is-inspired & {
    color: green;
  }
`;

export const StyledAttributes = styled.div``;

export const StyledLocked = styled.div`
  --spectrum-semantic-notice-color-icon: var(--spectrum-global-color-static-red-700);

  ${tokens}

  ${StyledContainer}.is-locked & {
    display: flex;
  }
`;

export const StyledCasualty = styled.div`
  --spectrum-semantic-notice-color-icon: var(--spectrum-global-color-static-red-700);

  ${tokens}

  ${StyledContainer}.is-casualty & {
    display: flex;
  }
`;

export const StyledCommanded = styled.div`
  ${tokens}

  ${StyledContainer}.is-commanded & {
    display: flex;
  }
`;

export const StyledDisrupted = styled.div`
  display: none;

  position: absolute;
  top: -10px;
  right: -4px; 
  z-index: 10;
  transform: rotate(14deg);

  ${StyledContainer}.is-disrupted & {
    display: flex;
  }
`;

export const StyledOrdered = styled.div`
  ${tokens}

  ${StyledContainer}.is-ordered & {
    display: flex;
  }
`;

export const StyledActions = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 50;

  ${StyledContainer}.is-active & {
    display: block;
  }
`;
