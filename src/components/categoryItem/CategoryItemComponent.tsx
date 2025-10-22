import Category from '../../types/category'
import { FunctionComponent } from 'react'

import { CategoryItemContainer, CategoryName } from './categoryItemStyle'

interface categoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<categoryItemProps> = ({ category }) => {
  return (
    <CategoryItemContainer>
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem
