import React from "react";
import {
  FaShippingFast,
  FaMoneyCheckAlt,
  FaRocket,
  FaWifi,
} from "react-icons/fa";
const Slide = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full bg-green-600 text-white  py-8 px-20 rounded-xl">
      <div className="flex flex-col">
        <FaShippingFast className="text-7xl"></FaShippingFast>
        <div className="">
          <p className="font-bold text-3xl my-2">Fast Delivery</p>
          <p className="text-lg">
            Find tracking information and order details from Your Orders.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <FaMoneyCheckAlt className="text-7xl"></FaMoneyCheckAlt>
        <div className="">
          <p className="font-bold text-3xl my-2">Save Money</p>
          <p className="text-lg">Get Your Coupon ASAP and get 40% discount</p>
        </div>
      </div>
      <div className="flex flex-col">
        <FaRocket className="text-7xl"></FaRocket>
        <div className="">
          <p className="font-bold text-3xl my-2">Fast Return</p>
          <p className="text-lg">
            Money back. If the toy is broken while delivery...
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <FaWifi className="text-7xl"></FaWifi>
        <div className="">
          <p className="font-bold text-3xl my-2">Online Support</p>
          <p className="text-lg">
            Use our 24/7 customer hotline so you’re not alone if you have a
            question.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
