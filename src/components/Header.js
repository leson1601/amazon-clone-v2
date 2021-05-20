import React from 'react';
import styled from 'styled-components';
import logo from '../logo.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
      </HeaderSearch>
      <HeaderInfo>
        <HeaderUser>
          <OptionLineOne>Hello, Sign in</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderUser>
        <HeaderCart>
          <ShoppingCartIcon />
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
  align-items: center;
  background-color: rgb(19, 25, 33);
`;

const HeaderLogo = styled.a`
  /* display: block; */
`;

const HeaderImg = styled.img`
  height: 30px;
  margin: 10px 20px 0;
`;

const HeaderAddress = styled.div`
  display: flex;

  .MuiSvgIcon-root {
    fill: white;
  }
`;

const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderSearch = styled.div`
  flex: 1;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderInput = styled.input`
  width: 65%;
  padding: 0;
  margin: 0;
  height: 38px;
  border: 1px solid black;
  border-radius: 4px;
`;

const HeaderInfo = styled.div`
  display: flex;
`;

const HeaderUser = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;
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
  margin: 0 20px;
  .MuiSvgIcon-root {
    fill: white;
    font-size: 38px;
    margin-right: 5px;
  }
`;

const CartTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Header;
