angular.module('segnalibr.models.bookmarks', [
  // Dependencies
])
.service('BookmarksModel', ['$http', function(http) {
  const endpoints = {
    fetch: 'data/bookmarks.json',
  }

  this.getBookmarks = () => http.get(endpoints.fetch)
}])
