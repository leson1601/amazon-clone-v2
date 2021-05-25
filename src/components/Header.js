import React from 'react';
import styled from 'styled-components';
import logo from '../logo.png';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import { selectCart } from '../features/cartSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { selectUser } from '../features/userSlice';

function Header() {
  var provider = new firebase.auth.GoogleAuthProvider();
  const cart = useSelector(selectCart);
  const user = useSelector(selectUser);
  const quantity =
    cart &&
    cart.reduce((accu, item) => {
      return accu + item.quantity;
    }, 0);

  const login = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log('signed out');
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

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

      <HeaderInfo onClick={!user && login}>
        <HeaderUser>
          <OptionLineOne>
            Hello, {user ? user.displayName : 'Sign in'}
          </OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
          {user && (
            <SignOutButton>
              <Button
                variant='contained'
                size='large'
                startIcon={<ExitToAppIcon />}
                onClick={logout}
              >
                Sign out
              </Button>
            </SignOutButton>
          )}
        </HeaderUser>

        <HeaderCart>
          <Link to='/cart'>
            <ShoppingCartIcon />
            <CartQuantity>{quantity}</CartQuantity>
            <CartTitle>
              <OptionLineOne>Shopping</OptionLineOne>
              <OptionLineTwo>Basket</OptionLineTwo>
            </CartTitle>
          </Link>
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
  cursor: pointer;

  border: 1px solid var(--background-color);
  padding: 0 10px;
  border-radius: 2px;
  position: relative;

  ::after {
    display: block;
    content: '';
    width: 100%;
    height: 10px;
    position: absolute;
    top: 100%;
    left: 0;
  }

  :hover {
    border: 1px solid white;
    cursor: pointer;
  }
`;

const SignOutButton = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  display: none;
  ${HeaderUser}:hover & {
    display: block;
  }

  .MuiButton-contained {
    background-color: var(--primary-color);
  }

  .MuiButton-containedSizeLarge {
    padding: 4px 6px;
  }
  .MuiButton-label {
    min-width: 110px;
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
  padding: 0 10px;
  border: 1px solid var(--background-color);
  border-radius: 2px;

  :hover {
    border: 1px solid white;
    cursor: pointer;
  }

  a {
    display: flex;
    position: relative;
    align-items: center;
    height: 50px;
    min-width: 50px;

    .MuiSvgIcon-root {
      fill: white;
      font-size: 38px;
      margin-right: 5px;
    }
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
