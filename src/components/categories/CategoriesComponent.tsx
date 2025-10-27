import CategoryItem from '../categoryItem/CategoryItemComponent'
import { getDocs, collection } from 'firebase/firestore'
import {
  CategoriesContainer,
  CategoriesContent,
  CategoryItemList
} from './categoriesStyle'
import { db } from '../../config/firebaseConfig'
import { useEffect, useState } from 'react'
import Category from '../../types/category'
import { categoryConvert } from '../../converter/firebaseConvert'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []
      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConvert)
      )
      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })

      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

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
