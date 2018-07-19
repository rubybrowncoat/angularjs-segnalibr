// Categories
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'

// export const categoriesDefaultState = []
export const categoriesDefaultState = [
  {
     "id": 42,
     "slug": "development",
     "name": "Development"
  },
  // {
  //    "id": 16,
  //    "slug": "design",
  //    "name": "Design"
  // },
  // {
  //    "id": 70,
  //    "slug": "videogames",
  //    "name": "Video Games"
  // },
  // {
  //    "id": 41,
  //    "slug": "scifi",
  //    "name": "Science Fiction"
  // },
]
export const categoriesReducer = (state = categoriesDefaultState, { type, payload }) => {
  switch(type) {
    case FETCH_CATEGORIES: {
      return payload || state
    }
    default: {
      return state
    }
  }
}

// Category
export const GET_CURRENT_CATEGORY = 'GET_CURRENT_CATEGORY'

export const categoryDefaultState = { slug: undefined }

export const categoryReducer = (state = categoryDefaultState, { type, payload }) => {
  switch(type) {
    case GET_CURRENT_CATEGORY: {
      return payload || state
    }
    default: {
      return state
    }
  }
}

export const CategoriesActions = () => {
  const fetchCategories = categories => ({
    type: FETCH_CATEGORIES,
    payload: categories,
  })

  const selectCategory = category => ({
    type: GET_CURRENT_CATEGORY,
    payload: category,
  })

  return {
    fetchCategories,
    selectCategory,
  }
}
