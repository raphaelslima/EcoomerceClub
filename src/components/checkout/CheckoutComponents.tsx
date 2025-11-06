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
import axios from 'axios'

const CheckoutComponent: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  const handleFinishPurchaseClick = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/create-checkout-session`,
        {
          products
        }
      )

      window.location.href = data.url
    } catch (error) {
      console.log(error)
    }
  }

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
            <CustomButtonComponent
              startIcon={<BsBagCheck />}
              onClick={handleFinishPurchaseClick}>
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
