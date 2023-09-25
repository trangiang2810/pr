'use client'

import styles from './style.module.scss'
import CustomForm from './customFormMeal'
import { BiSearch } from 'react-icons/bi'
import { useContext } from 'react'
import { MealContext } from '@/context'
import Categories from '../categories'
import { Input } from 'antd'

const Meals: React.FC = () => {
  const { Search } = Input
  const { handleSearch, meals }: any = useContext(MealContext)
  return (
    <section className={styles.container}>
      <div className={styles.search_input}>
        <Search
          placeholder="input search text"
          allowClear
          onSearch={handleSearch}
          style={{ width: '50%' }}
        />
      </div>
      <Categories />
      <CustomForm />
    </section>
  )
}

export default Meals
