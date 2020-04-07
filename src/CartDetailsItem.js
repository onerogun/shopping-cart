import React from "react";

const CartDetailsItem = (props) => {
  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
         /* src={`http://admin.2qn4ziu8xq.us-east-1.elasticbeanstalk.com/getimageforjson/${props.id}`}*/
          style={{ width: "5rem", height: "5rem" }}
          alt="product"
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product: </span>
        {props.name}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price: </span>
        {props.price}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">amount: </span>
        {props.amount}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Total:$ </span>
        {props.price * props.amount}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <button>Remove</button>
      </div>
    </div>
  );
};

export default CartDetailsItem;
