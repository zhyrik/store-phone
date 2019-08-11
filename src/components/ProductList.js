import React, { useContext } from 'react'

import Product from './Product'
import Title from './Title'

import { AppContext } from './Context'

export default function ProductList() {
  // const [products, setProducts] = useState([])
  const { product } = useContext(AppContext)
  return (
    <>
      <div className="py-4"></div>
      <div className="container">
        <Title name='our' title='product' />
        <div className="row">
          {product.map(productItem => <Product product={productItem} key={productItem.id}/>)}
        </div>
      </div>
    </>
  )
}
