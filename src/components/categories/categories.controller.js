class CategoriesController {
  // @ngInject
  constructor($ngRedux, CategoriesActions, BookmarksActions) {
    this.$store = $ngRedux

    this.CategoriesActions = CategoriesActions
    this.BookmarksActions = BookmarksActions

    this.categories = []
  }

  $onInit() {
    this.unsubscribe = this.$store.connect(state => ({
      categories: state.categories,
      currentCategory: state.category,
    }), {
      ...this.CategoriesActions,
      ...this.BookmarksActions,
    })(this)

    this.fetchCategories()
  }

  $onDestroy() {
    this.unsubscribe()
  }

  onCategorySelect(category) {
    this.resetSelectedBookmark()

    this.selectCategory(category)
  }

  isCurrentCategory(category) {
    return this.currentCategory && this.currentCategory.slug === category.slug
  }
}

export default CategoriesController
