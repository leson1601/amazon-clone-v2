import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { selectProducts } from '../features/product/productSlice';

function ProductContainer() {
  const products = useSelector(selectProducts);
  return (
    <StyledProductContainer>
      <Grid container spacing={3}>
        {products &&
          products.map((product) => (
            <Grid item xs={12} sm={4}>
              <Product product={product} />
            </Grid>
          ))}
      </Grid>
    </StyledProductContainer>
  );
}

const StyledProductContainer = styled.div`
  padding: 250px 20px 0;
`;

export default ProductContainer;
