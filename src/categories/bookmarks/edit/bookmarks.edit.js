angular.module('segnalibr.categories.bookmarks.edit', [
  // Dependencies
])
.config(function($stateProvider) {
  $stateProvider.state({
    name: 'segnalibr.categories.bookmarks.edit',
    url: '^/bookmarks/:bookmarkId/edit',
    templateUrl: 'src/categories/bookmarks/edit/bookmarks.edit.template.html',
    controller: 'BookmarksEditController as bookmarksEditController',
  })
})
.controller('BookmarksEditController', function() {

})
