import { FunctionComponent, useContext, useState } from 'react'
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
import LoadingComponent from '../loading/LoadingComponent'

const CheckoutComponent: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)
  const [isLoading, setIsloading] = useState<Boolean>(false)

  const handleFinishPurchaseClick = async () => {
    try {
      setIsloading(true)
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/create-checkout-session`,
        {
          products
        }
      )

      window.location.href = data.url
      setIsloading(false)
    } catch (error) {
      console.log(error)
      setIsloading(false)
    }
  }

  if (isLoading) return <LoadingComponent />

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
