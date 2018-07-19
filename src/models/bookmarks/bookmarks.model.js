import UidGenerator from '../../utils/uid'

const endpoints = {
  fetch: 'data/bookmarks.json',
}

const bookmarkUids = new UidGenerator('bookmark-')

class BookmarksModel {
  constructor($http, $q) {
    'ngInject'

    this.$http = $http
    this.$q = $q

    this.bookmarks = []
  }

  getData(response) {
    return response.data
  }

  gatherBookmarks(data) {
    this.bookmarks = data

    return this.bookmarks
  }

  getBookmarks() {
    return this.$q.when(this.bookmarks.length
      ? this.bookmarks
      : this.$http.get(endpoints.fetch)
        .then(response => this.getData(response))
        .then(data => this.gatherBookmarks(data))
    )
  }

  createBookmark(bookmark) {
    this.bookmarks.push({
      ...bookmark,

      id: bookmarkUids.generate(),
    })
  }

  editBookmark(bookmark) {
    const index = this.bookmarks.findIndex(findBookmark => findBookmark.id === bookmark.id)

    this.bookmarks.splice(index, 1, bookmark)
  }

  deleteBookmark(bookmark) {
    if (confirm(`Stai per cancellare un Segnalibr. L'operazione non è reversibile.`)) {
      const index = this.bookmarks.findIndex(findBookmark => findBookmark.id === bookmark.id)

      this.bookmarks.splice(index, 1)
    }
  }
}

export default BookmarksModel

// angular.module('segnalibr.models.bookmarks', [
//   // Dependencies
// ])
// .service('BookmarksModel', ['$http', '$q', function(http, que) {
//   this.getBookmarkById = bookmarkId => {
//     const deferred = que.defer()

//     if (bookmarks.length) {
//       deferred.resolve(findBookmarkById(bookmarkId))
//     } else {
//       this.getBookmarks()
//         .then(() => deferred.resolve(findBookmarkById(bookmarkId)))
//     }

//     return deferred.promise
//   }
// }])
