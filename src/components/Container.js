import React from 'react';
import styled from 'styled-components';
import ProductContainer from './ProductContainer';

function Container() {
  return (
    <StyledContainer>
      <Banner>
        <ProductContainer />
      </Banner>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  max-width: 1500px;
  height: 600px;
  margin: auto;
`;

const Banner = styled.div`
  background-size: cover;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 1)
    ),
    url('https://images-eu.ssl-images-amazon.com/images/G/03/kindle/journeys/YTNkYTJjMWMt/YTNkYTJjMWMt-NTE1ZmFjYjAt-w1500._CB670576666_.jpg');
`;

export default Container;
