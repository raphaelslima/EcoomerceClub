import Category from '../../types/category'
import { FunctionComponent } from 'react'

import { CategoryItemContainer, CategoryName } from './categoryItemStyle'
import { useNavigate } from 'react-router-dom'

interface categoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<categoryItemProps> = ({ category }) => {
  const navigate = useNavigate()

  const handleExplreClick = () => {
    navigate(`/category/${category.id}`)
  }

  return (
    <CategoryItemContainer
      backgroundImage={category.imageUrl}
      onClick={handleExplreClick}>
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem
