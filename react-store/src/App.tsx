//@ts-nocheck

import { useEffect, useMemo, useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { initialize, Event } from '@harnessio/ff-javascript-client-sdk';


import Cart from './Store/Cart';
import Checkout from './Store/Checkout';
import Confirmation from './Store/Confirmation';
import Header from './Store/Header';
import Home from './Store/Home';
import ItemDetails from './Store/ItemDetails';
import List from './Store/List';

import { CartContext } from './Store/CartContext';
import { StoreData } from './Store/StoreData';
import { CategoryDetails } from './interfaces/CategoryDetails';
import { CartItemDetails } from './interfaces/CartItemDetails';

import './App.css';

/**Builds the base React app */
function App() {
  // Products, cart, and other shopping info
  const storeData = useMemo(() => new StoreData(), []);

  // T-shirt categories
  const [categories, setCategories] = useState([] as CategoryDetails[]);

  // Current user's shopping cart
  const [cart, setCart] = useState(storeData.getCart());

  // Updates the user's shopping cart
  function updateCart(cart: CartItemDetails[]) {
    storeData.setCart(cart);
    setCart(cart);
  }

  // Create list of categories and details
  useEffect(() => {
    storeData.getCategories().then(data => setCategories(data));
  }, [storeData]);
  useEffect(() => {
    const cf = initialize(
        '9b806dfa-56a4-4982-902b-236b5bc3fc4b',
        { identifier: 'mybooleanflag', attributes: { lastUpdated: Date(), host: window.location.href } },
        { baseUrl: 'https://config.ff.harness.io/api/1.0', eventUrl: 'https://events.ff.harness.io/api/1.0' }
    );
    cf.on(Event.READY, (flags) => {
        setFeatureFlags(flags);
        console.log(flags);
    });
    cf.on(Event.CHANGED, (flagInfo) => {
        console.log(flagInfo);
        if (flagInfo.deleted) {
            setFeatureFlags((currentFeatureFlags) => {
                delete currentFeatureFlags[flagInfo.flag];
                return { ...currentFeatureFlags };
            });
        } else {
            setFeatureFlags((currentFeatureFlags) => ({ ...currentFeatureFlags, [flagInfo.flag]: flagInfo.value }));
        }
    });
    return () => {
        cf?.close();
    };
}, []);

  // Create the router
  return (
    <CartContext.Provider value={{ cart, setCart: updateCart }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home categories={categories} />} />
          <Route path="/list/:listId/:itemId" element={<ItemDetails />} />
          <Route path="/list/:listId" element={<List categories={categories} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirm" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
