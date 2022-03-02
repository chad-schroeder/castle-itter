import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 20%;
    background-color: var(${props => props.bgColor});
`;

export const StyledCount = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;
`;
