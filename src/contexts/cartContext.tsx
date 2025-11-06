import CartProduct from '../types/cartProduct'
import {
  FunctionComponent,
  useState,
  createContext,
  useMemo,
  useEffect
} from 'react'
import Product from '../types/product'

interface ICartContext {
  isVisible: boolean
  products: CartProduct[]
  productsTotalPrice: number
  productsCount: number
  toggleCart: () => void
  addProductToCart: (product: Product) => void
  removeProductFromCart: (productId: string) => void
  increaseProductQtd: (productId: string) => void
  decreaseProductQtd: (productId: string) => void
  clearProducts: () => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  productsTotalPrice: 0,
  productsCount: 0,
  toggleCart: () => {},
  addProductToCart: (product: Product) => {},
  removeProductFromCart: (productId: string) => {},
  increaseProductQtd: (productId: string) => {},
  decreaseProductQtd: (productId: string) => {},
  clearProducts: () => {}
})

const CartContextProvider: FunctionComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])

  useEffect(() => {
    const productsFromLocalStorage = JSON.parse(
      localStorage.getItem('cartProducts')!
    )

    setProducts(productsFromLocalStorage)
  }, [])

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(products))
  }, [products])

  const removeProductFromCart = (productId: string) => {
    setProducts((products) =>
      products.filter((product) => product.id !== productId)
    )
  }

  const increaseProductQtd = (productId: string) => {
    return setProducts((products) =>
      products.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decreaseProductQtd = (productId: string) => {
    return setProducts((products) =>
      products
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((product) => product.quantity > 0)
    )
  }

  const addProductToCart = (product: Product) => {
    const productAlreadyInCart = products.some((item) => item.id === product.id)

    if (productAlreadyInCart) {
      return setProducts((products) =>
        products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    }

    setProducts((prevSTate) => [...prevSTate, { ...product, quantity: 1 }])
  }

  const toggleCart = () => {
    setIsVisible(!isVisible)
  }

  const productsTotalPrice = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.price * currentProduct.quantity
    }, 0)
  }, [products])

  const productsCount = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.quantity
    }, 0)
  }, [products])

  const clearProducts = () => {
    setProducts([])
  }

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        productsTotalPrice,
        productsCount,
        toggleCart,
        addProductToCart,
        removeProductFromCart,
        increaseProductQtd,
        decreaseProductQtd,
        clearProducts
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
