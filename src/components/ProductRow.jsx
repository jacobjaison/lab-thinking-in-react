import React from 'react'

const ProductRow = ({product}) => {
     
  return (<p key= {product.id}>
   <>
   {product.inStock ?
    <span className='name'>{product.name}</span>
    : <span className='name noStock'>{product.name}</span> }
    
    <span> </span>
    
    {product.inStock ? 
        <span className='price'>{product.price}</span>
        :<span className='price noStock'>{product.price}</span> }
    
    </>
 
   </p>)
   
}
export default ProductRow