import React from 'react'
import ProductPropsData from '../products/productprop'

const Nailpolish = async() => {
    const nailpolishData = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish')   
    const nailpolish = await nailpolishData.json()
  return (
    <div>
        <ProductPropsData productData={nailpolish} />
    </div>
  )
}

export default Nailpolish