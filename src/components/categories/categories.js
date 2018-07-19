import angular from 'angular'

import { CategoriesActions } from './categories.state'
import CategoryItemModule from '../category.item/category.item'

import categoriesComponent from './categories.component'

const CategoriesModule = angular.module('segnalibr.categories', [
  CategoryItemModule.name,
])
.factory('CategoriesActions', CategoriesActions)
.component('categories', categoriesComponent)

export default CategoriesModule
