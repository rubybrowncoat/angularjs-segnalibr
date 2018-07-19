class CategoriesController {
  // @ngInject
  constructor(CategoriesModel) {
    this.CategoriesModel = CategoriesModel

    this.categories = []
  }

  $onInit() {
    this.CategoriesModel.getCategories()
      .then(categories => this.categories = categories)
  }

  onCategorySelect(category) {
    console.log(category)
  }
}

export default CategoriesController
