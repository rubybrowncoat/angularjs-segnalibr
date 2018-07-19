const endpoints = {
  fetch: 'data/categories.json',
}

class CategoriesModel {
  constructor($http, $q) {
    'ngInject'

    this.$http = $http
    this.$q = $q

    this.categories = []
  }

  getData(response) {
    return response.data
  }

  gatherCategories(data) {
    this.categories = data

    return this.categories
  }

  getCategories() {
    return this.$q.when(this.categories.length
      ? this.categories
      : this.$http.get(endpoints.fetch)
        .then(response => this.getData(response))
        .then(data => this.gatherCategories(data))
    )
  }
}

export default CategoriesModel

// angular.module('segnalibr.models.categories', [
//   // Dependencies
// ])
// .service('CategoriesModel', ['$http', '$q', function(http, que) {
//   let categories = []
//   let currentCategory = null

//   const endpoints = {
//     fetch: 'data/categories.json',
//   }

//   const getData = response => response.data
//   const gatherCategories = response => categories = getData(response)

//   const findCategoryBySlug = categorySlug =>
//     categories.find(category => category.slug === categorySlug)

//   this.getCategories = () => que.when(categories.length
//     ? categories
//     : http.get(endpoints.fetch).then(gatherCategories)
//   )

//   this.getCategoryBySlug = categorySlug => {
//     const deferred = que.defer()

//     if (categories.length) {
//       deferred.resolve(findCategoryBySlug(categorySlug))
//     } else {
//       this.getCategories()
//         .then(() => deferred.resolve(findCategoryBySlug(categorySlug)))
//     }

//     return deferred.promise
//   }

//   this.setCurrentCategoryBySlug = categorySlug => {
//     this.getCategoryBySlug(categorySlug)
//       .then(category => currentCategory = category)
//   }

//   this.getCurrentCategory = () => currentCategory
//   this.getCurrentCategorySlug = () => currentCategory ? currentCategory.slug : ''
// }])
