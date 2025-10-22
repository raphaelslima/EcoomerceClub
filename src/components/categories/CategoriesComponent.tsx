import './categories.css'

import categoriesMock from '../../mock/categories'
import CategoryItem from '../categoryItem/CategoryItemComponent'

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="categories-content">
        {categoriesMock.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
