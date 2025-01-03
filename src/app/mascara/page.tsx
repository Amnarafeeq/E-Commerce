import React from 'react'
import ProductPropsData from '../products/productprop'

const Mascara = async() => {
    const mascaraData = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara')   
    const mascara = await mascaraData.json()
  return (
    <div>
        <ProductPropsData productData={mascara} />
    </div>
  )
}

export default Mascara