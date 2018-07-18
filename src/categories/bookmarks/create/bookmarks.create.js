angular.module('segnalibr.categories.bookmarks.create', [
  // Dependencies
])
.config(function($stateProvider) {
  $stateProvider.state({
    name: 'segnalibr.categories.bookmarks.create',
    url: '/create',
    templateUrl: 'src/categories/bookmarks/create/bookmarks.create.template.html',
    controller: 'BookmarksCreateController as bookmarksCreateController',
  })
})
.controller('BookmarksCreateController', function() {

})
