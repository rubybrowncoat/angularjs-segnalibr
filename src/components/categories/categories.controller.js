class CategoriesController {
  // @ngInject
  constructor(CategoriesModel) {
    CategoriesModel.getCategories()
      .then(categories => this.categories = categories)
  }
}

export default CategoriesController
