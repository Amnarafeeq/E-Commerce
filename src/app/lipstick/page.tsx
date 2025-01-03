import React from 'react'
import ProductPropsData from '../products/productprop'

const Lipstick = async() => {
    const lipstickData = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick') 
    const lipstick = await lipstickData.json()
  return (
    <div>
        <ProductPropsData productData={lipstick} />
    </div>
  )
}

export default Lipstick