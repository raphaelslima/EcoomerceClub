import Product from '../types/product'

interface CartProduct extends Product {
  quantity: number
}

export default CartProduct
