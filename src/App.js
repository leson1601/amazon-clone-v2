import React, { useEffect } from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { useDispatch } from 'react-redux';
import { setProducts } from './features/productSlice';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => dispatch(setProducts(json)));
  }, [dispatch]);

  return (
    <Router>
      <div className='app'>
        <Header />
        <NavBar />
        <Switch>
          <Route path='/product/:productId'>
            <ProductDetail />
          </Route>
          <Route path='/about'>
            <h3>About</h3>
          </Route>
          <Route path='/'>
            <Container />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
