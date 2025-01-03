import React from "react";
import ProductPropsData from "../products/productprop";

const Eyebrow = async () => {
  const eyebrowData = await fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow"
  );
  const eyebrow = await eyebrowData.json();
  return (
    <div>
      <ProductPropsData productData={eyebrow} />
    </div>
  );
};

export default Eyebrow;
