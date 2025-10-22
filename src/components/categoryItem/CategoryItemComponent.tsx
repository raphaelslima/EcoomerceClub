import Category from '../../types/category'
import { FunctionComponent } from 'react'
import './categoryItem.css'

interface categoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<categoryItemProps> = ({ category }) => {
  return (
    <div className="category-item-container">
      <div className="category-name">
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </div>
    </div>
  )
}

export default CategoryItem
