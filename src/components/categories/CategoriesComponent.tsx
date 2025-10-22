import './categories.css'

import categoriesMock from '../../mock/categories'
import CategoryItem from '../categoryItem/CategoryItemComponent'
import {
  CategoriesContainer,
  CategoriesContent,
  CategoryItemList
} from './categoriesStyle'

const Categories = () => {
  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categoriesMock.map((category) => (
          <CategoryItemList key={category.id}>
            <CategoryItem category={category} />
          </CategoryItemList>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
