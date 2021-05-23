import React from 'react';
import styled from 'styled-components';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

function Product({ product }) {
  return (
    <StyledProduct>
      <ProductImage src={product.image} />
      <ProductInfo>
        <Title>{product.title}</Title>
        <Rating>
          <StarRoundedIcon />
          <StarRoundedIcon />
          <StarRoundedIcon />
          <StarRoundedIcon />
          <StarRoundedIcon />
        </Rating>
        <Price>€{product.price}</Price>
      </ProductInfo>
    </StyledProduct>
  );
}

const StyledProduct = styled.div`
  background-color: white;
  height: 300px;
  border-radius: 4px;
  display: flex;
  padding: 20px;
`;

const ProductImage = styled.img`
  object-fit: contain;
  max-width: 260px;
`;

const ProductInfo = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h3`
  color: rgb(0, 113, 144);
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const Rating = styled.div`
  .MuiSvgIcon-root {
    fill: var(--primary-color);
  }
`;

const Price = styled.h3`
  color: rgb(177, 39, 36);
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export default Product;
