import { FunctionComponent } from 'react'
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './cartitemStyle'
import CartProduct from '../../types/cartProduct'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'

interface CartItemComponentProps {
  product: CartProduct
}

const CartItemComponent: FunctionComponent<CartItemComponentProps> = ({
  product
}) => {
  return (
    <>
      <CartItemContainer>
        <CartItemImage imageUrl={product.imageUrl} />

        <CartItemInfo>
          <p>{product.name}</p>
          <p>R$ {product.price}</p>

          <CartItemQuantity>
            <AiOutlineMinus size={20} />
            {product.quantity}
            <AiOutlinePlus size={20} />
          </CartItemQuantity>
        </CartItemInfo>

        <RemoveButton>
          <AiOutlineClose size={25} />
        </RemoveButton>
      </CartItemContainer>
    </>
  )
}

export default CartItemComponent
