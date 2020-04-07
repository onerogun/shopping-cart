import React from "react";
import { render } from "react-dom";
import "./App.css";
import CartProvider from "./CartContext";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { ProductProvider } from "./ProductContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartDetails from "./CartDetails";
function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/cart" component={CartDetails} />
          </Switch>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

render(<App />, document.getElementById("root"));
