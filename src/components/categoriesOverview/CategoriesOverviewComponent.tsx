import { FunctionComponent, useContext, useEffect } from 'react'
import { Container } from './categoriesOverviewStyle'
import { categoryContext } from '../../contexts/categoryContext'
import CategoryOverviewComponent from '../categoryOverviewComponent/CategoryOverviewComponent'
import LoadingComponent from '../loading/LoadingComponent'

const CategoriesOverviewComponent: FunctionComponent = () => {
  const { categories, isLoading, fetchCategories } = useContext(categoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])

  if (isLoading) return <LoadingComponent />

  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverviewComponent key={category.id} category={category} />
      ))}
    </Container>
  )
}

export default CategoriesOverviewComponent
