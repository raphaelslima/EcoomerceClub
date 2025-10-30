import { FunctionComponent } from 'react'
import Category from '../../types/category'
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './categoryOverviewStyle'

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
        <ProductsContainer></ProductsContainer>
      </CategoryContainer>
    </>
  )
}

export default CategoryOverviewComponent
