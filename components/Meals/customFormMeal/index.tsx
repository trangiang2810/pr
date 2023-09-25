'use client'

import { useContext } from 'react'
import Image from 'next/image'
import styles from './style.module.scss'
import { DetailsProps, MealsProps } from '@/types'
import { MealContext } from '@/context'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'
import Link from 'next/link'
import { Button } from 'antd'

const CustomForm = () => {
  const { meals, handleMealDetail, handleFavoriteClick, favorites, handleLoadMore }: any =
    useContext(MealContext)
  if (!meals || meals.length === 0) {
    return (
      <div className={styles.ring}>
        Loading
        <span></span>
      </div>
    )
  }
  return (
    <div className={styles.items}>
      {meals?.map((meals: MealsProps) => (
        <div key={meals.idMeal} className={styles.wrapper}>
          <div className={styles.image}>
            <Image
              src={meals?.strMealThumb}
              alt={meals?.strMeal}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.content}>
            <h3>{meals.strMeal}</h3>
            <Link href={`details/${meals.idMeal}`}>
              <Button className={styles.btn} onClick={() => handleMealDetail(meals.idMeal)}>
                DETAIL
              </Button>
            </Link>
          </div>
          <div className={styles.favourite} onClick={() => handleFavoriteClick(meals?.idMeal)}>
            {favorites.some((favorite: DetailsProps) => favorite?.idMeal === meals?.idMeal) ? (
              <AiTwotoneHeart />
            ) : (
              <AiOutlineHeart />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CustomForm
