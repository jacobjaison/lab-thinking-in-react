import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = ({products}) => {
  return <div>
        <span> Name </span>
        <span> Price </span>
        {products.map (product => {
                return <ProductRow key={product.id} product={product} />
            })}
  </div>
}
export default ProductTable