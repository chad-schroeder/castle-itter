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

  &.not-mobilized {
    --border-color: var(--spectrum-global-color-static-blue-800);
    --background-color: var(--spectrum-global-color-static-gray-300);
  }

  &.nationality-USA {
    --border-color: #117620;
  }

  &.nationality-GER {
    --border-color: var(--spectrum-global-color-static-gray-900);
  }

  &.nationality-FRA {
    --border-color: #34629b;
  }

  &.nationality-AUS {
    --border-color: var(--spectrum-global-color-static-red-700);
  }

  &.is-casualty {
    opacity: 0.25;
  }

  &.is-commanded {
    --border-color: orange;
  }

  &.is-ordered {
    --border-color: var(--spectrum-global-color-chartreuse-400);
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

export const StyledNotMobilized = styled.div`
  --spectrum-semantic-notice-color-icon: var(--spectrum-global-color-static-red-700);

  ${tokens}

  ${StyledContainer}.not-mobilized & {
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
  bottom: -40px;
  left: 50%;
  z-index: 50;
  transform: translateX(-50%);

  ${StyledContainer}.is-active & {
    display: block;
  }
`;
