import styled from 'styled-components';

export const Container = styled.li`
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  position: relative;
`;

export const IncidentButton = styled.button`
  border: 0;
  right: 24px;
  position: absolute;
  transition: opacity 0.2s;
  top: 24px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Property = styled.strong`
  color: #41414d;
  display: block;
  margin-bottom: 16px;
`;

export const Value = styled.p`
  color: #737380;
  line-height: 21px;
  font-size: 16px;

  & + strong {
    margin-top: 32px;
  }
`;
