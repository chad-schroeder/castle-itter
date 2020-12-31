import styled from 'styled-components';

export const StyledMap = styled.div`
    width: 1600px;
    height: 800px;
    background-image: url(images/map.png);
    background-size: cover;
`;

export const StyledTiles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    grid-gap: 1em;
`;

export const StyledUnits = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 1em;
`;
