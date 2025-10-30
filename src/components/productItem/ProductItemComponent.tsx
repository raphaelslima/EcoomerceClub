import { FunctionComponent } from 'react'
import Product from '../../types/product'
import { ProductContainer, ProductImage, ProductInfo } from './productItemStyle'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  return (
    <>
      <ProductContainer>
        <ProductImage imageUrl={product.imageUrl} />
        <ProductInfo>
          <p>{product.name}</p>
          <p>R$ {product.price}</p>
        </ProductInfo>
      </ProductContainer>
    </>
  )
}

export default ProductItem
