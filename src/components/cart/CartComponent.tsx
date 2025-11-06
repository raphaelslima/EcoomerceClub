import { FunctionComponent, useContext } from 'react'
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './CartStyle'
import CustomButtonComponent from '../customButton/CustomButtonComponent'
import { BsCartCheck } from 'react-icons/bs'
import { CartContext } from '../../contexts/cartContext'
import CartItemComponent from '../cartItem/CartItemComponent'
import { useNavigate } from 'react-router-dom'

const CartComponent: FunctionComponent = () => {
  const { isVisible, toggleCart, products, productsTotalPrice, productsCount } =
    useContext(CartContext)

  const navigate = useNavigate()

  const handleNavigateToCheckoutPage = () => {
    navigate('/checkout')
    toggleCart()
  }

  return (
    <>
      <CartContainer isVisible={isVisible}>
        <CartEscapeArea onClick={toggleCart} />
        <CartContent>
          {productsCount > 0 ? (
            <CartTitle>Seu Carrinho.</CartTitle>
          ) : (
            <CartTitle>Seu Carrinho está vazio.</CartTitle>
          )}

          {products.map((product) => (
            <CartItemComponent key={product.id} product={product} />
          ))}

          {productsCount > 0 && (
            <CartTotal>Total: R$ {productsTotalPrice}</CartTotal>
          )}
          {productsCount > 0 && (
            <CustomButtonComponent
              startIcon={<BsCartCheck />}
              onClick={handleNavigateToCheckoutPage}>
              {' '}
              Ir parao checkout
            </CustomButtonComponent>
          )}
        </CartContent>
      </CartContainer>
    </>
  )
}

export default CartComponent
