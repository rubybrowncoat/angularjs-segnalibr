angular.module('segnalibr.models.bookmarks', [
  // Dependencies
])
.service('BookmarksModel', ['$http', '$q', function(http, que) {
  let bookmarks = []

  const endpoints = {
    fetch: 'data/bookmarks.json',
  }

  const getData = response => response.data
  const gatherBookmarks = response => bookmarks = getData(response)

  this.getBookmarks = () => que.when(bookmarks.length
    ? bookmarks
    : http.get(endpoints.fetch).then(gatherBookmarks)
  )
}])
