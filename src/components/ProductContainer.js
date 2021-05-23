import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import Grid from '@material-ui/core/Grid';

function ProductContainer() {
  return (
    <StyledProductContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Product />
        </Grid>
      </Grid>
    </StyledProductContainer>
  );
}

const StyledProductContainer = styled.div`
  padding: 250px 20px 0;

  min-height: 600px;
`;

export default ProductContainer;
