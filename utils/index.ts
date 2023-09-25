import axios from 'axios'

export const useApi = () => {
  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/'

  const getMeals = async (search: string) => {
    try {
      const response = await axios.get(`${apiUrl}search.php?s=${search}`)
      return response.data.meals || []
    } catch (error) {
      console.error('Error fetching Meals:', error)
      return []
    }
  }

  const getCategories = async () => {
    try {
      const response = await axios.get(`${apiUrl}categories.php`)
      return response.data.categories || []
    } catch (error) {
      console.error('Error fetching categories:', error)
      return []
    }
  }

  const getMealsByCategory = async (category: string) => {
    try {
      const response = await axios.get(`${apiUrl}filter.php?c=${category}`)
      return response.data.meals || []
    } catch (error) {
      console.error('Error fetching Meals by category:', error)
      return []
    }
  }

  const getMealDetails = async (MealId: string) => {
    try {
      const response = await axios.get(`${apiUrl}lookup.php?i=${MealId}`)
      return response.data.meals ? response.data.meals[0] : null
    } catch (error) {
      console.error('Error fetching Meal details:', error)
      return null
    }
  }

  return {
    getMeals,
    getCategories,
    getMealsByCategory,
    getMealDetails,
  }
}
