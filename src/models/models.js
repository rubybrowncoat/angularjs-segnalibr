import angular from 'angular'

import CategoriesModel from './categories/categories.model'
import BookmarksModel from './bookmarks/bookmarks.model'

const ModelsModule = angular.module('models', [
  // No Dependencies
])
.service('CategoriesModel', CategoriesModel)
.service('BookmarksModel', BookmarksModel)

export default ModelsModule
