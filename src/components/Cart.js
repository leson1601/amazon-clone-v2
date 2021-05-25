import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectCart } from '../features/cartSlice';
import React from 'react';

function Cart() {
  const cart = useSelector(selectCart);

  return (
    <StyledContainer>
      {cart.length > 0 ? (
        <StyledCart>Cart</StyledCart>
      ) : (
        <h3>Your Amazon basket is empty</h3>
      )}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 1500px;
  margin: auto;
`;

const StyledCart = styled.div`
  background-color: white;
  height: 600px;
  border-radius: 4px;
  display: flex;
  padding: 20px;
  justify-content: center;
  padding-top: 100px;
`;
export default Cart;
