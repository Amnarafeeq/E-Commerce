import ProductPropsData from './productprop';

const Blush = async () => {
  const blushData = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush');
  const blush = await blushData.json();

  return (
    <>            
      <ProductPropsData productData={blush} />
    </>
  );
};

export default Blush;









// import ProductPropsData from './productprop';



// const Blush = async () => {
  
//     const blushData = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush')
//     const blush = await blushData.json()
    
//   return (
//    <>            
//         <h1></h1>
//         <ProductPropsData productData={blush}  />

//    </>
//   )
// }

// export default Blush