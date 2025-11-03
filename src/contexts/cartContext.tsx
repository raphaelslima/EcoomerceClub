import CartProduct from '../types/cartProduct'
import { FunctionComponent, useState, createContext } from 'react'
import Product from '../types/product'

interface ICartContext {
  isVisible: boolean
  toggleCart: () => void
  products: CartProduct[]
  addProductToCart: (product: Product) => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  toggleCart: () => {},
  products: [],
  addProductToCart: (product: Product) => {}
})

const CartContextProvider: FunctionComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])

  const addProductToCart = (product: Product) => {
    setProducts((prevSTate) => [...prevSTate, { ...product, quantity: 1 }])
  }

  const toggleCart = () => {
    setIsVisible(!isVisible)
  }

  return (
    <CartContext.Provider
      value={{ isVisible, products, toggleCart, addProductToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
