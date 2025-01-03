import React from 'react'
import ProductPropsData from '../products/productprop'

const lipliner = async() => {
    const liplinerData = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner')
    const lipliner = await liplinerData.json()
  return (
    <div>
        <ProductPropsData productData={lipliner} />
    </div>
  )
}

export default lipliner