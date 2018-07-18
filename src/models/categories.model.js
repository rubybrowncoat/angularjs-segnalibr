angular.module('segnalibr.models.categories', [
  // Dependencies
])
.service('CategoriesModel', ['$http', '$q', function(http, que) {
  let categories = []

  const endpoints = {
    fetch: 'data/categories.json',
  }

  const getData = response => response.data
  const gatherCategories = response => categories = getData(response)

  const findCategoryBySlug = categorySlug =>
    categories.find(category => category.slug === categorySlug)

  this.getCategories = () => que.when(categories.length
    ? categories
    : http.get(endpoints.fetch).then(gatherCategories)
  )

  this.getCategoryBySlug = categorySlug => {
    const deferred = que.defer()

    if (categories.length) {
      deferred.resolve(findCategoryBySlug(categorySlug))
    } else {
      this.getCategories()
        .then(() => deferred.resolve(findCategoryBySlug(categorySlug)))
    }

    return deferred.promise
  }
}])
