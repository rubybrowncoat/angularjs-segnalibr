import {
  combineReducers
} from 'redux'

import {
  categoriesReducer as categories,
  categoryReducer as category
} from '../components/categories/categories.state'

const rootReducer = combineReducers({
  categories,
  category,
})

export default rootReducer
