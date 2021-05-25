import React, { useEffect } from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Cart from './components/Cart';

import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './features/productSlice';
import { setCart } from './features/cartSlice';
import { setUser } from './features/userSlice';
import ProductDetail from './components/ProductDetail';
import { db } from './db/firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //fetch products data from API
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => dispatch(setProducts(json)));

    //save products data from API to store of redux
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

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        const loggedInUser = { username: user.displayName, email: user.email };
        dispatch(setUser(loggedInUser));
      } else {
        // No user is signed in.
        dispatch(setUser(null));
      }
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
          <Route path='/cart'>
            <Cart />
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
