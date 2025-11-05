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

const CartComponent: FunctionComponent = () => {
  const { isVisible, toggleCart, products, productsTotalPrice } =
    useContext(CartContext)

  return (
    <>
      <CartContainer isVisible={isVisible}>
        <CartEscapeArea onClick={toggleCart} />
        <CartContent>
          <CartTitle>Seu Carrinho</CartTitle>

          {products.map((product) => (
            <CartItemComponent key={product.id} product={product} />
          ))}

          <CartTotal>Total: R$ {productsTotalPrice}</CartTotal>
          <CustomButtonComponent startIcon={<BsCartCheck />}>
            {' '}
            Ir parao checkout
          </CustomButtonComponent>
        </CartContent>
      </CartContainer>
    </>
  )
}

export default CartComponent
