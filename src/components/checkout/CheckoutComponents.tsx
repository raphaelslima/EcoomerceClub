import { FunctionComponent, useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'
import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal
} from './checkoutStyle'
import CustomButtonComponent from '../customButton/CustomButtonComponent'
import { BsBagCheck } from 'react-icons/bs'
import CartItemComponent from '../cartItem/CartItemComponent'

const CheckoutComponent: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  return (
    <>
      <CheckoutContainer>
        <CheckoutTitle>Checkout</CheckoutTitle>

        {products.length > 0 ? (
          <>
            <CheckoutProducts>
              {products.map((product) => (
                <CartItemComponent product={product} key={product.id} />
              ))}
            </CheckoutProducts>
            <CheckoutTotal>Total: R$: {productsTotalPrice}</CheckoutTotal>
            <CustomButtonComponent startIcon={<BsBagCheck />}>
              Finalizar compra
            </CustomButtonComponent>
          </>
        ) : (
          <p>Seu carrinho está vazio.</p>
        )}
      </CheckoutContainer>
    </>
  )
}

export default CheckoutComponent
