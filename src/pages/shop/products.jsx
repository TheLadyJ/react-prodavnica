import React from 'react'
import { Product } from './product'

export const Products = ({ products }) => {
    return (
        <div className='products'>

        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    )

}

