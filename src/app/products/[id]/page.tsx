import React from 'react'
import SingleProduct from './singleProduct';

const ShowBlushData = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const blushData = await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
  const blush = await blushData.json();

  return (
  <>
     <SingleProduct blush={blush} />
  </>
  );
};

export default ShowBlushData;

