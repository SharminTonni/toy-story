import React from "react";
import "./Delivery.css";

const Delivery = () => {
  return (
    <div className="delivery font-serif text-center mb-12 my-12 rounded-xl">
      <h1
        className="text-5xl font-bold mb-3 text-white  pt-24 
      "
      >
        Get 40% Discount!!!
      </h1>
      <h1
        className="text-4xl font-bold  text-blue-900  pt-24 
      "
      >
        BE IN TIME FOR THE <br /> HUGE PROMO IN OUR STORES!
      </h1>
      <p className="text-lg mt-5 font-semibold">
        Use your coupon code and get an <br /> awesome discount on new toy cars
        for your children <br /> along with our detailed review, tips and hints!
      </p>
      <div className="lg:mt-48   text-center">
        <p className="text-2xl mb-3 text-white font-semibold">
          We Offer A Premium Service For Online Shopping
        </p>
      </div>
    </div>
  );
};

export default Delivery;
