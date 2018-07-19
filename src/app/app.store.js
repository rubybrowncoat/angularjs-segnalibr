import {
  combineReducers
} from 'redux'

import {
  categoriesReducer as categories,
  categoryReducer as category
} from '../components/categories/categories.state'

import {
  bookmarksReducer as bookmarks,
  bookmarkReducer as bookmark,
} from '../components/bookmarks/bookmarks.state'

const rootReducer = combineReducers({
  categories,
  category,

  bookmarks,
  bookmark,
})

export default rootReducer
