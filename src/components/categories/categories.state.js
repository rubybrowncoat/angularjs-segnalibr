// const defaultState = []
const defaultState = [
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

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const GET_CURRENT_CATEGORY = 'GET_CURRENT_CATEGORY'

export const categoriesReducer = (state = defaultState, { type, payload }) => {
  switch(type) {
    case FETCH_CATEGORIES: {
      return payload || state
    }
    default: {
      return state
    }
  }
}

export const categoryReducer = (state = defaultState, { type, payload }) => {
  switch(type) {
    case GET_CURRENT_CATEGORY: {
      return payload || state
    }
    default: {
      return state
    }
  }
}
