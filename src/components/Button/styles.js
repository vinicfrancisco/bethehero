import styled from 'styled-components';

export const StyledButton = styled.div`
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    height: 60px;
    line-height: 60px;
    margin-top: 16px;
    transition: filter 0.2s;
    text-align: center;
    text-decoration: none;
    width: 100%;

    &:hover {
    filter: brightness(90%);
    }
`;
