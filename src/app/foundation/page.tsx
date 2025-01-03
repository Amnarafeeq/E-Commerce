import React from "react";
import ProductPropsData from "../products/productprop";

const Foundation = async () => {
  const foundationData = await fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation"
  );
  const foundation = await foundationData.json();
  return (
    <div>
      <ProductPropsData productData={foundation} />
    </div>
  );
};

export default Foundation;
