'use client'
import { MealContext } from '@/context'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import styles from './style.module.scss'

import { AiTwotoneHeart } from 'react-icons/ai'
import { Button } from 'antd'
import Title from '../title'

const Favorite = () => {
  const { favorites, handleFavoriteClick, handleMealDetail }: any = useContext(MealContext)
  if (favorites.length === 0) {
    return (
      <div className={styles.empty}>
        <p>Favorites list is empty.</p>
      </div>
    )
  }

  return (
    <>
      <Title text={'Favorite Meal'} />
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Favorite Meal</h1>
        </div>
        {favorites.map((meal: any, index: number) => (
          <div
            className={styles.meals_list}
            key={index}
            onClick={() => handleMealDetail(meal.idMeal)}
          >
            <Link className={styles.meal_item} href={`/details/${meal?.idMeal}`}>
              <div className={styles.thumb}>
                <Image
                  src={meal?.strMealThumb}
                  priority
                  alt={meal?.strMeal}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.name}>
                <h2>{meal?.strMeal}</h2>
              </div>
            </Link>
            <Link className={styles.btn_detail} href={`details/${meal?.idMeal}`}>
              <Button className={styles.btn}>DETAIL</Button>
            </Link>
            <div className={styles.favourite}>
              <AiTwotoneHeart
                onClick={() => handleFavoriteClick(meal?.idMeal)}
                className={styles.icon}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Favorite
