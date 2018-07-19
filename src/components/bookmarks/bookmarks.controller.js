class BookmarksController {
  // @ngInject
  constructor($timeout, $ngRedux, BookmarksActions) {
    this.$timeout = $timeout
    this.$store = $ngRedux

    this.BookmarksActions = BookmarksActions
  }

  $onInit() {
    this.unsubscribe = this.$store.connect(state => ({
      bookmarks: state.bookmarks,

      currentBookmark: state.bookmark,
      currentCategory: state.category,
    }), {
      ...this.BookmarksActions,
    })(this)

    this.fetchBookmarks()
  }

  $onDestroy() {
    this.unsubscribe()
  }

  getCurrentCategorySlug() {
    return this.currentCategory ? this.currentCategory.slug : ''
  }

  getCurrentCategoryName() {
    return this.currentCategory ? this.currentCategory.name : null
  }

  isCurrentBookmark(bookmark) {
    return this.currentBookmark && this.currentBookmark.id === bookmark.id
  }

  onSave(bookmark) {
    this.saveBookmark(bookmark)

    this.resetSelectedBookmark()
  }
}

export default BookmarksController
