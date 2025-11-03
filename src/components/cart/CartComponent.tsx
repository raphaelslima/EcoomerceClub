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

const CartComponent: FunctionComponent = () => {
  const { isVisible, toggleCart } = useContext(CartContext)

  return (
    <>
      <CartContainer isVisible={isVisible}>
        <CartEscapeArea onClick={toggleCart} />
        <CartContent>
          <CartTitle>Seu Carrinho</CartTitle>
          {/* Produtos */}
          <CartTotal>Total: R$ 100,00</CartTotal>
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
