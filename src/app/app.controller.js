class BookmarksController {
  // @ngInject
  constructor($ngRedux, CategoriesActions) {
    this.$store = $ngRedux

    this.CategoriesActions = CategoriesActions
  }

  resetCategory() {
    this.$store.dispatch(this.CategoriesActions.selectCategory({ slug: undefined }))
  }
}

export default BookmarksController
