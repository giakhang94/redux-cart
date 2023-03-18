import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
//action
import { DECREASE, INCREASE } from "./action";
//provider
import { Provider } from "react-redux";
// redux stuff
//store - stores data, think of state
//reducer - function that used to update store
import { createStore } from "redux";
import reducer from "./reducer";
//init store
const initialStore = {
  cart: cartItems,
  total: cartItems.reduce((accum, current) => {
    return accum + current.price * current.amount;
  }, 0),
  amount: cartItems.reduce((accum, current) => {
    return accum + current.amount;
  }, 0),
};
const store = createStore(reducer, initialStore);
function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer store={store} />
    </Provider>
  );
}

export default App;
