class CategoriesController {
  // @ngInject
  constructor(CategoriesModel) {
    CategoriesModel.getCategories()
      .then(categories => this.categories = categories)
  }

  onCategorySelect(category) {
    console.log(category)
  }
}

export default CategoriesController
