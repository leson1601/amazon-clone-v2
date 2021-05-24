import React, { useEffect } from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './features/productSlice';
import { setCart, selectCart } from './features/cartSlice';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { db } from './db/firebase';

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => dispatch(setProducts(json)));
    db.collection('cart').onSnapshot((snapshot) => {
      dispatch(
        setCart(
          snapshot.docs.map((item) => {
            return {
              ...item.data(),
              dbId: item.id,
            };
          })
        )
      );
    });
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
