import React, { useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = React.createContext();

export const ProductProvider = props => {
  const [products, setProducts] = useState([]);

  const url = "http://admin.2qn4ziu8xq.us-east-1.elasticbeanstalk.com/getjson";

  const fetchProducts = () => {
    axios({
      method: "get",
      url: url
    }).then(response => {
      console.log(response);
      setProducts(response.data);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};
