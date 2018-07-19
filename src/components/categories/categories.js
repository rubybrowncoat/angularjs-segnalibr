import angular from 'angular'

import categoriesComponent from './categories.component'

const CategoriesModule = angular.module('segnalibr.categories', [
  // No Dependencies
])
.component('categories', categoriesComponent)

export default CategoriesModule
