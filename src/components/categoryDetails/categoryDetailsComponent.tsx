import { FunctionComponent, useEffect, useState } from 'react'
import Category from '../../types/category'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/firebaseConfig'
import { categoryConvert } from '../../converter/firebaseConvert'
import LoadingComponent from '../loading/LoadingComponent'
import {
  CategoryTitle,
  Container,
  IconContainer,
  ProductsContainer
} from './CategoryDetailsComponentStyle'
import { BiChevronLeft } from 'react-icons/bi'

import ProductItem from '../productItem/ProductItemComponent'
import { useNavigate } from 'react-router-dom'

interface CategoryDetailsComponentProps {
  categoryId: string
}

const CategoryDetailsComponent: FunctionComponent<
  CategoryDetailsComponentProps
> = ({ categoryId }) => {
  const [category, setCategory] = useState<Category | null>(null)
  const [isLoading, setIsloading] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleNavigateToHomePage = () => {
    navigate('/')
  }

  useEffect(() => {
    try {
      setIsloading(true)
      const fetchCategory = async () => {
        const querySnapshot = await getDocs(
          query(
            collection(db, 'categories').withConverter(categoryConvert),
            where('id', '==', categoryId)
          )
        )

        const category = querySnapshot.docs[0]?.data()

        setCategory(category)
      }

      fetchCategory()
      setIsloading(false)
    } catch (error) {
      console.log(error)
      setIsloading(false)
    }
  }, [])

  if (isLoading) return <LoadingComponent />

  return (
    <>
      <Container>
        <CategoryTitle>
          <IconContainer onClick={handleNavigateToHomePage}>
            <BiChevronLeft size={36} />
          </IconContainer>
          <p>Explorar {category?.displayName}</p>
        </CategoryTitle>

        <ProductsContainer>
          {category?.products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ProductsContainer>
      </Container>
    </>
  )
}

export default CategoryDetailsComponent
