import { FunctionComponent, useContext } from 'react'
import Product from '../../types/product'
import { ProductContainer, ProductImage, ProductInfo } from './productItemStyle'
import CustomButtonComponent from '../customButton/CustomButtonComponent'
import { BsCartPlus } from 'react-icons/bs'
import { CartContext } from '../../contexts/cartContext'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const { addProductToCart } = useContext(CartContext)

  const handleAddToCartClick = () => {
    addProductToCart(product)
  }

  return (
    <>
      <ProductContainer>
        <ProductImage imageUrl={product.imageUrl}>
          <CustomButtonComponent
            startIcon={<BsCartPlus />}
            onClick={handleAddToCartClick}>
            Adicionar ao carrinho
          </CustomButtonComponent>
        </ProductImage>
        <ProductInfo>
          <p>{product.name}</p>
          <p>R$ {product.price}</p>
        </ProductInfo>
      </ProductContainer>
    </>
  )
}

export default ProductItem
