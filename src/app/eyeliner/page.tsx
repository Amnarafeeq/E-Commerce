import React from "react";
import ProductPropsData from "../products/productprop";

const Eyeliner = async () => {
  const eyelinerData = await fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner"
  );
  const eyeliner = await eyelinerData.json();
  return (
    <>
      <ProductPropsData productData={eyeliner} />
    </>
  );
};

export default Eyeliner;
