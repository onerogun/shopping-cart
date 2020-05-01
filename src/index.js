import React from "react";
import { render } from "react-dom";
import "./App.css";
import CartProvider from "./CartContext";
import ProductList from "./ProductList";
import { ProductProvider } from "./ProductContext";
import CartDetails from "./CartDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <Switch>
            <Route exact path="/products" component={ProductList} />
            <Route path="/cart" component={CartDetails} />
          </Switch>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

render(<App />, document.getElementById("root"));
