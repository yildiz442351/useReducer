import React from 'react'
import { addToCart } from '../actions/cartActions';

const ProductList = ({dispatch}) => {
    const products = [
        {id:1, name:"Product 1",price:10}
        {id:2, name:"Product 2", price:20}
        {id:3, name:"Product 3", price:30}
    ];
  return (
    <div>
      <h2>ProductList</h2>
      <ul>
        {products.map((product) => (
            <li key={product.id}>
                {product.name} - {product.price}
                <button onClick={()=>dispatch(addToCart)}>Add to Cart</button>

            </li>

        ))}
      </ul>
    </div>
  )
}

export default ProductList
