import React from "react";
import "./ShippingTime.css";

const ShippingTime = () => {
  return (
    <div className="single-widget">
      <div className="widget-title">Estimate Shipping Time</div>
      <div className="widget-container">
        <div className="shipping-input-container">
          <input type="text" placeholder="Enter Shipping Time" />
          <span>Days</span>
        </div>
      </div>
    </div>
  );
};

export default ShippingTime;
