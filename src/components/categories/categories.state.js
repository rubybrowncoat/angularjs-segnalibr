const ENDPOINTS = {
  FETCH: () => 'http://localhost:4242/categories',
}

// Categories
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'

export const categoriesDefaultState = []

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

// Actions
export const CategoriesActions = ($http, $q) => {
  'ngInject'

  const getData = result => result.data

  const fetchCategories = () => (dispatch, getState) => {
    const { categories } = getState()

    return $q.when(
      categories.length ? categories : $http.get(ENDPOINTS.FETCH()).then(getData)
    ).then(data => dispatch({
      type: FETCH_CATEGORIES,
      payload: data,
    }))
  }

  const selectCategory = category => ({
    type: GET_CURRENT_CATEGORY,
    payload: category,
  })

  return {
    fetchCategories,
    selectCategory,
  }
}
