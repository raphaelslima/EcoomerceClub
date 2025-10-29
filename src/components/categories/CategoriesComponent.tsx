import CategoryItem from '../categoryItem/CategoryItemComponent'

import {
  CategoriesContainer,
  CategoriesContent,
  CategoryItemList
} from './categoriesStyle'

import { useContext, useEffect } from 'react'

import { categoryContext } from '../../contexts/categoryContext'
import LoadingComponent from '../loading/LoadingComponent'

const Categories = () => {
  const { categories, fetchCategories, isLoading } = useContext(categoryContext)

  useEffect(() => {
    fetchCategories()
  }, [])

  if (isLoading) return <LoadingComponent />

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <CategoryItemList key={category.id}>
            <CategoryItem category={category} />
          </CategoryItemList>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
