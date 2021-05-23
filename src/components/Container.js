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
  margin: auto;
`;

const Banner = styled.div`
  min-height: 600px;
  /* background-size: contain;
  background-repeat: no-repeat;
  background-image: url('https://images-eu.ssl-images-amazon.com/images/G/03/kindle/journeys/YTNkYTJjMWMt/YTNkYTJjMWMt-NTE1ZmFjYjAt-w1500._CB670576666_.jpg'),
    linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, 1)); */
  background: linear-gradient(
      rgba(233, 236, 236, 0),
      rgba(233, 236, 236, 0.2) 15%,
      rgba(233, 236, 236, 1) 20%
    ),
    url('https://images-eu.ssl-images-amazon.com/images/G/03/kindle/journeys/YTNkYTJjMWMt/YTNkYTJjMWMt-NTE1ZmFjYjAt-w1500._CB670576666_.jpg')
      no-repeat;
  background-size: contain;
`;

export default Container;
