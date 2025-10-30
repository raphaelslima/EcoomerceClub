import { FunctionComponent, useContext, useEffect } from 'react'
import { Container } from './categoriesOverviewStyle'
import { categoryContext } from '../../contexts/categoryContext'
import CategoryOverviewComponent from '../categoryOverviewComponent/CategoryOverviewComponent'

const CategoriesOverviewComponent: FunctionComponent = () => {
  const { categories, fetchCategories } = useContext(categoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])

  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverviewComponent key={category.id} category={category} />
      ))}
    </Container>
  )
}

export default CategoriesOverviewComponent
