import React from "react";
import ProductPropsData from "../products/productprop";

const Bronze = async () => {
  const bronzeData = await fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer"
  );
  const bronze = await bronzeData.json();
  return (
    <div>
      <ProductPropsData productData={bronze} />
    </div>
  );
};

export default Bronze;
