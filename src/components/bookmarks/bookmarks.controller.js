class BookmarksController {
  // @ngInject
  constructor(BookmarksModel, $ngRedux) {
    this.BookmarksModel = BookmarksModel

    this.$store = $ngRedux
  }

  $onInit() {
    this.BookmarksModel.getBookmarks()
      .then(bookmarks => this.bookmarks = bookmarks)

    this.$store.subscribe(() => {
      const { category } = this.$store.getState()

      this.currentCategory = category
    })
  }

  getCurrentCategory() {
    return this.currentCategory
  }

  getCurrentCategorySlug() {
    return this.currentCategory ? this.currentCategory.slug : ''
  }

  getCurrentCategoryName() {
    return this.currentCategory ? this.currentCategory.name : null
  }

  createBookmark() {
    this.currentBookmark = this.initNewBookmark()
  }

  editBookmark(bookmark) {
    this.currentBookmark = bookmark
  }

  resetBookmark() {
    this.currentBookmark = null
  }

  initNewBookmark() {
    return {
      title: '',
      url: '',
      category: this.getCurrentCategorySlug(),
    }
  }

  isCurrentBookmark(bookmark) {
    return this.currentBookmark && this.currentBookmark.id === bookmark.id
  }

  saveBookmark(bookmark) {
    if (bookmark.id !== undefined) {
      this.BookmarksModel.editBookmark(bookmark)
    } else {
      this.BookmarksModel.createBookmark(bookmark)
    }
  }

  deleteBookmark(bookmark) {
    this.BookmarksModel.deleteBookmark(bookmark)
  }

  onSave(bookmark) {
    this.saveBookmark(bookmark)

    this.resetBookmark()
  }
}

export default BookmarksController
