import React from 'react';
import styled from 'styled-components';
import logo from '../logo.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <StyledHeader>
      <HeaderLogo href='/'>
        <HeaderImg src={logo} />
      </HeaderLogo>

      <HeaderAddress>
        <LocationOnIcon />
        <AddressInfo>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTwo>Select your address</OptionLineTwo>
        </AddressInfo>
      </HeaderAddress>

      <HeaderSearch>
        <HeaderInput />
        <HeaderSearchIcon>
          <SearchIcon />
        </HeaderSearchIcon>
      </HeaderSearch>

      <HeaderInfo>
        <HeaderUser>
          <OptionLineOne>Hello, Sign in</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderUser>

        <HeaderCart>
          <ShoppingCartIcon />
          <CartQuantity>0</CartQuantity>
          <CartTitle>
            <OptionLineOne>Shopping</OptionLineOne>
            <OptionLineTwo>Basket</OptionLineTwo>
          </CartTitle>
        </HeaderCart>
      </HeaderInfo>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--background-color);
`;

const HeaderLogo = styled.a`
  /* display: block; */
  border: 1px solid var(--background-color);
  border-radius: 2px;

  :hover {
    border: 1px solid white;
  }
`;

const HeaderImg = styled.img`
  height: 30px;
  margin: 10px 20px 0;
`;

const HeaderAddress = styled.div`
  display: flex;
  border: 1px solid var(--background-color);
  align-items: center;
  height: 50px;
  border-radius: 2px;

  :hover {
    border: 1px solid white;
    cursor: pointer;
  }

  .MuiSvgIcon-root {
    fill: white;
  }
`;

const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderSearch = styled.div`
  width: 750px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`;

const HeaderInput = styled.input`
  width: 90%;
  padding: 0 20px;
  margin: 0;
  height: 38px;
  border: none;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
`;

const HeaderSearchIcon = styled.div`
  height: 38px;
  width: 38px;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  .MuiSvgIcon-root {
    fill: white;
  }
`;

const HeaderInfo = styled.div`
  display: flex;
`;

const HeaderUser = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 1px solid var(--background-color);
  padding: 0 10px;
  border-radius: 2px;

  :hover {
    border: 1px solid white;
    cursor: pointer;
  }
`;

const OptionLineOne = styled.span`
  color: white;
  font-size: 12px;
  text-align: left;
  margin-bottom: 2px;
`;

const OptionLineTwo = styled.span`
  font-size: 14px;
  color: white;
  font-weight: bold;
`;

const HeaderCart = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  min-width: 50px;

  padding: 0 10px;
  border: 1px solid var(--background-color);
  border-radius: 2px;
  position: relative;

  :hover {
    border: 1px solid white;
    cursor: pointer;
  }
  .MuiSvgIcon-root {
    fill: white;
    font-size: 38px;
    margin-right: 5px;
  }
`;

const CartQuantity = styled.h3`
  color: var(--primary-color);
  position: absolute;
  top: -12%;
  left: 22%;
  font-size: 15px;
`;

const CartTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Header;
