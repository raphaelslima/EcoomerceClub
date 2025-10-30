import { FunctionComponent, useContext, useEffect } from 'react'
import { Container } from './categoriesOverviewStyle'
import { categoryContext } from '../../contexts/categoryContext'

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
        <p key={category.id}>{category.displayName}</p>
      ))}
    </Container>
  )
}

export default CategoriesOverviewComponent
