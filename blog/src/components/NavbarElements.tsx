import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  max-width: 1240px;
  margin: 0 auto;
  background: white;
  border-bottom: solid 2px #612C94;
  height: 50px;
  display: flex;
  z-index: 12;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`;

export const MenuWrapper = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
  color: #612C94;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;

  &.active {
    color: #000000;
  }
`;


export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;



export const ImgNav = styled.img`
  width: 64px;
`;

export const SearchIcon = styled.svg`
height: 40%
`;

