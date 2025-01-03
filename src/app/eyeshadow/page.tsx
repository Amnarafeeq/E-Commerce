import React from "react";
import ProductPropsData from "../products/productprop";

const Eyeshadow = async () => {
  const eyeshadowData = await fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow"
  );
  const eyeshadow = await eyeshadowData.json();
  return (
    <div>
      <ProductPropsData productData={eyeshadow} />
    </div>
  );
};

export default Eyeshadow;
