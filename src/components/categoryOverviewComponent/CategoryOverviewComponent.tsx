import { FunctionComponent } from 'react'
import Category from '../../types/category'
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './categoryOverviewStyle'
import ProductItem from '../productItem/ProductItemComponent'

interface categoryOverviewComponentProps {
  category: Category
}

const CategoryOverviewComponent: FunctionComponent<
  categoryOverviewComponentProps
> = ({ category }) => {
  return (
    <>
      <CategoryContainer>
        <CategoryTitle>{category.displayName}</CategoryTitle>
        <ProductsContainer>
          {category.products.slice(0, 4).map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ProductsContainer>
      </CategoryContainer>
    </>
  )
}

export default CategoryOverviewComponent
