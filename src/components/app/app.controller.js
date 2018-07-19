class BookmarksController {
  // @ngInject
  constructor(CategoriesModel) {
    this.CategoriesModel = CategoriesModel
  }

  resetCategory() {
    this.CategoriesModel.setCurrentCategory(null)
  }
}

export default BookmarksController
