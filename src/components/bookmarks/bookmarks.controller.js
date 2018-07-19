class BookmarksController {
  // @ngInject
  constructor(BookmarksModel, CategoriesModel) {
    this.BookmarksModel = BookmarksModel
    this.CategoriesModel = CategoriesModel
  }

  $onInit() {
    this.BookmarksModel.getBookmarks()
      .then(bookmarks => this.bookmarks = bookmarks)
  }

  getCurrentCategory() {
    return this.CategoriesModel.getCurrentCategory()
  }

  getCurrentCategorySlug() {
    const category = this.getCurrentCategory()

    return category ? category.slug : ''
  }

  getCurrentCategoryName() {
    const category = this.getCurrentCategory()

    return category ? category.name : null
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
