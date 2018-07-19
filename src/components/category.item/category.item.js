import angular from 'angular'

import categoryItemComponent from './category.item.component'

const CategoryItemModule = angular.module('categoryItem', [
  // No Dependencies
])
.component('categoryItem', categoryItemComponent)

export default CategoryItemModule
