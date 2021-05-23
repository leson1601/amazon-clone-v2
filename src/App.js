import React, { useEffect } from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts, setProducts } from './features/product/productSlice';

function App() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => dispatch(setProducts(json)));
  }, [dispatch]);
  console.log(products);
  return (
    <div className='app'>
      <Header />
      <NavBar />
      <Container />
    </div>
  );
}

export default App;
