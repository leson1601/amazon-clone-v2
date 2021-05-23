import React from 'react';
import styled from 'styled-components';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

function Product() {
  return (
    <StyledProduct>
      <ProductImage src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/46af2822-3606-4ea1-8ad0-c31c8869714d/sportswear-club-fleece-herren-hoodie-3wJ34T.png' />
      <ProductInfo>
        <Title>Solid Hoodie Men Jacket</Title>
        <Rating>
          <StarRoundedIcon />
          <StarRoundedIcon />
          <StarRoundedIcon />
          <StarRoundedIcon />
          <StarRoundedIcon />
        </Rating>
        <Price>€46.95</Price>
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
