import React, { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartDetailsList from "./CartDetailsList";
import axios from "axios";

const CartDetails = () => {
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
    console.log(cart),
    (
      <React.Fragment>
        <div className="mt-2 col-20 ml-1 mb-5 col-lg-2">
          <Link to="/products" className="ml-auto">
            <button>Products</button>
          </Link>
        </div>
        <section>
          {itemNumberTotal > 0 ? <CartColumns /> : <EmptyCart />}
          <CartDetailsList />
        </section>
        <CartTotal />
      </React.Fragment>
    )
  );
};

function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h2>Your cart is empty</h2>
        </div>
      </div>
    </div>
  );
}

function CartTotal() {
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

  const placeOrder = () => {
    axios
      .post("http://localhost:5000/placeorderreact", cart, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        console.log("order sent to server");
      })
      .catch((err) => {
        console.log("can't sent to server");
        console.log(err);
      });

    console.log("Order Placed!");
    console.log(cart);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>$ {cartTotal.toFixed(2)}</strong>
            </h5>
            <h5>
              <span className="text-title">tax :</span>
              <strong>$ {(cartTotal / 10).toFixed(2)}</strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <strong>$ {(cartTotal * 1.1).toFixed(2)}</strong>
            </h5>
            <button
              type="button"
              className="btn btn-primary text-uppercase"
              onClick={() => placeOrder()}
            >
              place order
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CartDetails;
