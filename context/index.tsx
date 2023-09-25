'use client'

import React, { createContext, useEffect, useState } from 'react'
import { useApi } from '@/utils'
import { MealsProps } from '@/types'

export interface MealContextValue {
  meals: MealsProps[]
  handleSearch: (e: string) => void
  search: string
  categories: string[]
  handleCategoryFilter: (category: string) => Promise<void>
  selectedMeal: MealsProps | null
  favorites: MealsProps[]
  handleMealDetail: (mealId: string) => Promise<void>
  handleFavoriteClick: (mealId: string) => void
}

export const MealContext = createContext<MealContextValue | undefined>(undefined)

interface MealContextProviderProps {
  children: React.ReactNode
}

const MealContextProvider: React.FC<MealContextProviderProps> = ({ children }) => {
  const [meals, setMeals] = useState<MealsProps[]>([])
  const [search, setSearch] = useState<string>('')
  const [categories, setCategories] = useState<string[]>([])
  const [selectedMeal, setSelectedMeal] = useState<MealsProps | null>(null)

  const [favorites, setFavorites] = useState<MealsProps[]>([])

  const $api = useApi()

  const fetchData = async () => {
    const data: MealsProps[] = await $api.getMeals(search)
    const categoryData: string[] = await $api.getCategories()
    setMeals(data)
    setCategories(categoryData)
  }

  useEffect(() => {
    fetchData()
  }, [search])

  useEffect(() => {
    const storedMeal = localStorage.getItem('selectedMeal')
    const storedFavorie = localStorage.getItem('favorites')
    if (storedMeal) {
      setSelectedMeal(JSON.parse(storedMeal))
    }

    if (storedFavorie) {
      setFavorites(JSON.parse(storedFavorie))
    }
  }, [])

  const handleSearch = (e: string) => {
    setSearch(e)
  }

  const handleCategoryFilter = async (category: string) => {
    const data: MealsProps[] = await $api.getMealsByCategory(category)
    setMeals(data)
  }
  const handleMealDetail = async (mealId: string) => {
    const meal = await $api.getMealDetails(mealId)
    setSelectedMeal(meal)

    localStorage.setItem('selectedMeal', JSON.stringify(meal))
  }

  const handleFavoriteClick = (id: string) => {
    const selectMeal = meals.find(meal => meal.idMeal === id)
    if (selectMeal) {
      const updatedFavorites = favorites.some(favorite => favorite?.idMeal === id)
        ? favorites.filter(favorite => favorite.idMeal !== id)
        : [...favorites, selectMeal]

      setFavorites(updatedFavorites)
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    }
  }

  return (
    <MealContext.Provider
      value={{
        meals,
        handleSearch,
        search,
        categories,
        handleCategoryFilter,
        selectedMeal,
        handleMealDetail,
        favorites,
        handleFavoriteClick,
      }}
    >
      {children}
    </MealContext.Provider>
  )
}

export default MealContextProvider
