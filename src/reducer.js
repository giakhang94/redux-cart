import { CLEAR_CART, DECREASE, GET_TOTAL, INCREASE, REMOVE } from "./action";
//reducer
const reducer = (state, action) => {
  if (action.type === INCREASE) {
    const newCart = [...state.cart];
    let index = newCart.findIndex((item, index) => {
      return item.id === action.payload.id;
    });
    newCart[index].amount += 1;
    let total = newCart.reduce((acum, current) => {
      return acum + current.price * current.amount;
    }, 0);
    return { ...state, cart: newCart, total: total, amount: state.amount + 1 };
  }
  if (action.type === DECREASE) {
    if (action.payload.amount === 1) {
      let newCart = state.cart.filter((item) => {
        return item.id !== action.payload.id;
      });
      return {
        ...state,
        cart: newCart,
        amount: state.amount - 1,
        total: newCart.reduce((acum, current) => {
          return acum + current.price * current.amount;
        }, 0),
      };
    }
    const newCart = [...state.cart];
    let index = newCart.findIndex((item, index) => {
      return item.id === action.payload.id;
    });
    newCart[index].amount -= 1;
    let total = newCart.reduce((acum, current) => {
      return acum + current.price * current.amount;
    }, 0);
    return { ...state, cart: newCart, total: total, amount: state.amount - 1 };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === REMOVE) {
    const newCart = [...state.cart];
    const res = newCart.filter((item) => {
      return item.id !== action.payload.id;
    });
    let amount = res.reduce((acc, current) => {
      return acc + current.amount;
    }, 0);
    let total = res.reduce((acum, current) => {
      return acum + current.price * current.amount;
    }, 0);
    return { ...state, cart: res, amount: amount, total: total };
  }
  if (action.type === GET_TOTAL) {
    //dung reduce de tinh total,
    //dung useEffect de get total lai moi lan re-render
    //tuong tu cho get_amount
  }
  return state;
};
export default reducer;
