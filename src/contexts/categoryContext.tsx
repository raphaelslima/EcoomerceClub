import { createContext, FunctionComponent, useState } from 'react'
import Category from '../types/category'
import { collection, getDocs } from 'firebase/firestore'
import { categoryConvert } from '../converter/firebaseConvert'
import { db } from '../config/firebaseConfig'

interface Icategory {
  categories: Category[]
  fetchCategories: () => Promise<void>
  isLoading: boolean
}

export const categoryContext = createContext<Icategory>({
  categories: [],
  fetchCategories: () => Promise.resolve(),
  isLoading: false
})

const CategoryContextProvider: FunctionComponent = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchCategories = async () => {
    try {
      setIsLoading(true)
      const categoriesFromFirestore: Category[] = []
      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConvert)
      )
      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })

      setCategories(categoriesFromFirestore)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <categoryContext.Provider
      value={{ categories, fetchCategories, isLoading }}>
      {children}
    </categoryContext.Provider>
  )
}

export default CategoryContextProvider
