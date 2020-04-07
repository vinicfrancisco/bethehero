import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  margin: 32px auto;
  max-width: 1180px;
  padding: 30px;
  width: 100%;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
`;

export const HeaderTitle = styled.span`
  font-size: 20px;
  margin-left: 24px;
`;

export const HeaderLogo = styled.img`
  height: 64px;
`;

export const HeaderButton = styled(Link)`
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  height: 60px;
  line-height: 60px;
  margin-left: auto;
  margin-top: 0;
  transition: filter 0.2s;
  text-align: center;
  text-decoration: none;
  width: 260px;

  &:hover {
    filter: brightness(90%);
  }
`;

export const LogoutButton = styled.button`
  background: transparent;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  height: 60px;
  margin-left: 16px;
  transition: border-color 0.2s;
  width: 60px;

  &:hover {
    border-color: #999;
  }
`;

export const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 24px;
`;

export const IncidentsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
`;
