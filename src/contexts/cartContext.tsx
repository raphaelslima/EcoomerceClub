import CartProduct from '../types/cartProduct'
import { FunctionComponent, useState, createContext } from 'react'

interface ICartContext {
  isVisible: boolean
  toggleCart: () => void
  products: CartProduct[]
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  toggleCart: () => {},
  products: []
})

const CartContextProvider: FunctionComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products] = useState<CartProduct[]>([])

  const toggleCart = () => {
    setIsVisible(!isVisible)
  }

  return (
    <CartContext.Provider value={{ isVisible, products, toggleCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
