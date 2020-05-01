import React, { useContext } from "react";
import Product from "./Product";
import { ProductContext } from "./ProductContext";
import Cart from "./Cart";

const ProductList = () => {
  const [productList, setProductList] = useContext(ProductContext);
  return (
    <React.Fragment>
      <Cart />
      <div className="py-5">
        <div className="container">
          <div className="row">
            {productList.map(item => (
              <Product
                productName={item.productName}
                price={item.price}
                productId={item.productId}
                amount={item.amount}
                key={item.productId}
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
