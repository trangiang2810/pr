import { MealContext } from '@/context'
import { CategoriesProps } from '@/types'
import React, { useContext, useRef } from 'react'
import Image from 'next/image'
import styles from './style.module.scss'
import { Carousel } from 'antd'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

const Categories = () => {
  const { categories, handleCategoryFilter }: any = useContext(MealContext)
  const carouselRef = useRef<any>(null)

  const nextSlide = () => {
    carouselRef.current.next()
  }

  const prevSlide = () => {
    carouselRef.current.prev()
  }

  return (
    <div className={styles.container}>
      <button className={styles.btn_back} onClick={prevSlide}>
        <GrFormPrevious />
      </button>
      <Carousel autoplay slidesToShow={5} ref={carouselRef}>
        {categories.map(
          ({
            idCategory,
            strCategory,
            strCategoryThumb,
            strCategoryDescription,
          }: CategoriesProps) => (
            <div
              className={styles.items}
              key={idCategory}
              onClick={() => handleCategoryFilter(strCategory)}
            >
              <div className={styles.thumb}>
                <Image
                  src={strCategoryThumb}
                  alt={strCategory}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h2>{strCategory}</h2>
            </div>
          )
        )}
      </Carousel>
      <button className={styles.btn_next} onClick={nextSlide}>
        <GrFormNext />
      </button>
    </div>
  )
}

export default Categories
