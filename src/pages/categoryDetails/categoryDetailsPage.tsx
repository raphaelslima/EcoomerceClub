import { FunctionComponent } from 'react'
import Header from '../../components/header/HeaderComponent'
import CategoryDetailsComponent from '../../components/categoryDetails/categoryDetailsComponent'
import { useParams } from 'react-router-dom'

const CategoryDetailsPage: FunctionComponent = () => {
  const { id } = useParams()

  if (!id) return null

  return (
    <>
      <Header />
      <CategoryDetailsComponent categoryId={id} />
    </>
  )
}

export default CategoryDetailsPage
