import './categories.css'

import categoriesMock from '../../mock/categories'
import CategoryItem from '../categoryItem/CategoryItem'

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="categories-content">
        {categoriesMock.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}

export default Categories
