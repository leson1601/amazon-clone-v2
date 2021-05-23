import styled from 'styled-components';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

function NavBar() {
  return (
    <StyledNavBar>
      <NavAll href='/'>
        <MenuIcon />
        All
      </NavAll>
      <Nav href='/'>Best Seller</Nav>
      <Nav href='/'>Amazon Basics</Nav>
      <Nav href='/'>New Releases</Nav>
      <Nav href='/'>Prime Video</Nav>
    </StyledNavBar>
  );
}

const StyledNavBar = styled.div`
  background-color: rgb(35, 47, 62);
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const NavAll = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 10px;
  display: flex;
  align-items: center;
  padding: 0px 6px;
  border-radius: 2px;
  border: 1px solid transparent;

  :hover {
    border: 1px solid white;
  }

  .MuiSvgIcon-root {
    margin-top: 2px;
    font-size: 26px;
  }
`;

const Nav = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 10px;
  padding: 4px 6px;
  border-radius: 2px;
  border: 1px solid transparent;

  :hover {
    border: 1px solid white;
  }
`;

export default NavBar;
