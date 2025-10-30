import { FunctionComponent } from 'react'
import Header from '../../components/header/HeaderComponent'
import CategoriesOverviewComponent from '../../components/categoriesOverview/CategoriesOverviewComponent'

const ExplorePage: FunctionComponent = () => {
  return (
    <>
      <Header />

      <CategoriesOverviewComponent />
    </>
  )
}

export default ExplorePage
