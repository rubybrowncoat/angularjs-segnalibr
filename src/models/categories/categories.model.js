const endpoints = {
  fetch: 'data/categories.json',
}

class CategoriesModel {
  constructor($http, $q) {
    'ngInject'

    this.$http = $http
    this.$q = $q

    this.categories = []
    this.currentCategory = null
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

  getCurrentCategory() {
    return this.currentCategory
  }

  setCurrentCategory(category) {
    this.getCategories()
      .then(() => this.currentCategory = category)
  }
}

export default CategoriesModel
