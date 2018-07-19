class BookmarksController {
  // @ngInject
  constructor(BookmarksModel) {
    BookmarksModel.getBookmarks()
      .then(bookmarks => this.bookmarks = bookmarks)
  }
}

export default BookmarksController
