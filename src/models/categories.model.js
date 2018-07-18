angular.module('segnalibr.models.categories', [
  // Dependencies
])
.service('CategoriesModel', ['$http', function(http) {
  const endpoints = {
    fetch: 'data/categories.json',
  }

  this.getCategories = () => http.get(endpoints.fetch)
}])
