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
.controller('BookmarksEditController', function($state, $stateParams, BookmarksModel) {
  const returnToBookmarks = () => {
    const { category } = $stateParams

    if (category) {
      $state.go('segnalibr.categories.bookmarks', {
        category,
      })
    } else {
      $state.go('segnalibr.categories')
    }
  }

  const resetEditForm = bookmark => {
    this.currentBookmark = bookmark
    this.editedBookmark = angular.copy(bookmark)

    // this.editedBookmark = {
    //   ...bookmark,
    // }
  }

  this.cancelEdit = () => returnToBookmarks()

  this.editBookmark = editedBookmark => {
    BookmarksModel.editBookmark(editedBookmark)

    returnToBookmarks()
  }

  BookmarksModel.getBookmarkById($stateParams.bookmarkId)
    .then(bookmark => bookmark ? resetEditForm(bookmark) : returnToBookmarks())
})
