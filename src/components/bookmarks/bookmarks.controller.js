class BookmarksController {
  // @ngInject
  constructor(BookmarksModel) {
    this.BookmarksModel = BookmarksModel
  }

  $onInit() {
    this.BookmarksModel.getBookmarks()
      .then(bookmarks => this.bookmarks = bookmarks)
  }
}

export default BookmarksController
