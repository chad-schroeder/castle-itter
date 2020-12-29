import styled from 'styled-components';

export const StyledMap = styled.div`
    width: 1600px;
    height: 800px;
    background-image: url(images/map.png);
    background-size: cover;
`;

export const StyledTable = styled.table`
    border: 1px solid var(--spectrum-table-border-color, var(--spectrum-alias-border-color-mid));

    tbody {
        background-color: #fff;
    }

    tr {
        border-bottom: 1px solid var(--spectrum-table-border-color, var(--spectrum-alias-border-color-mid));
    }

    th {
        padding: 10px 16px;
        font-size: 11px;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: 0.06em;
        text-align: left;
        text-transform: uppercase;
        color: rgb(110, 110, 110);

        &.align-right {
            text-align: right;
        }

        &.align-center {
            text-align: center;
        }
    }

    td {
        padding: 14px 16px;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        color: rgb(75, 75, 75);
    }

    tbody tr:hover {
        cursor: pointer;
        background-color: #fcfcfc;
    }

    tbody tr:last-child td:first-child {
        border-bottom-left-radius: 4px;
    }
`;

export const StyledTiles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    grid-gap: 1em;
`;
