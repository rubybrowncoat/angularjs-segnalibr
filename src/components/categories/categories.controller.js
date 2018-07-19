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
    this.CategoriesModel.setCurrentCategory(category)
  }

  isCurrentCategory(category) {
    const currentCategory = this.CategoriesModel.getCurrentCategory()

    return currentCategory && currentCategory.slug === category.slug
  }
}

export default CategoriesController
