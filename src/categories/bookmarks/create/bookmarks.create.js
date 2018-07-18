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
.controller('BookmarksCreateController', ['$state', '$stateParams', 'BookmarksModel', function($state, $stateParams, BookmarksModel) {
  const returnToBookmarks = () => {
    $state.go('segnalibr.categories.bookmarks', {
      category: $stateParams.category,
    })
  }

  const resetCreateForm = () => {
    this.newBookmarkCreation = {
      title: '',
      url: '',
      category: $stateParams.category,
    }
  }

  this.cancelCreate = () => returnToBookmarks()

  this.createBookmark = bookmark => {
    BookmarksModel.createBookmark(bookmark)

    returnToBookmarks()
  }

  resetCreateForm()
}])
