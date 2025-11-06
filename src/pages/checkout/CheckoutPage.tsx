import { FunctionComponent } from 'react'
import Header from '../../components/header/HeaderComponent'
import CheckoutComponent from '../../components/checkout/CheckoutComponents'

const CheckoutPage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <CheckoutComponent />
    </>
  )
}

export default CheckoutPage
