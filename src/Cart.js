import React, { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const [
    cart,
    setCart,
    cartTotal,
    setCartTotal,
    newItem,
    setNewItem,
    itemNumberTotal,
    setItemNumberTotal,
  ] = useContext(CartContext);



  return (
    <React.Fragment>
      <div>
        <span>Number of Items in cart : {itemNumberTotal}</span>
        <hr />
        <span>Total : {cartTotal.toFixed(2)}</span>
      </div>
      <Link to="/cart" className="ml-auto">
        <button>
          Cart
          <i className="fas fa-cart-plus" />
        </button>
      </Link>
    </React.Fragment>
  );
};

export default Cart;
