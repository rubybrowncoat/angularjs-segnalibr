angular.module('Segnalibr', [
  'ui.router',

  'segnalibr.models.bookmarks',

  'segnalibr.categories',
  'segnalibr.categories.bookmarks',
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'segnalibr',
    url: '',
    abstract: true,
  })

  $urlRouterProvider.otherwise('/')
})
.controller('MainController', function($scope, $stateParams, BookmarksModel) {
  const bookmarks = BookmarksModel.getBookmarks()

  $scope.currentCategory = null

  $scope.setCategory = category => {
    $scope.cancelForm()

    $scope.currentCategory = category
  }

  $scope.isCurrentCategory = category => {
    const categorySlug = $stateParams.category

    return categorySlug !== null && category.slug === categorySlug
  }

  // State
  $scope.state = {
    create: false,
    edit: false,
  }

  $scope.doCreate = () => {
    $scope.state.create = true
    $scope.state.edit = false

    $scope.resetCreateForm()
  }

  $scope.doEdit = bookmark => {
    $scope.state.create = false
    $scope.state.edit = true

    $scope.resetEditForm(bookmark)
  }

  $scope.cancelForm = () => {
    $scope.state.create = false
    $scope.state.edit = false
  }

  $scope.canCreate = () => $scope.currentCategory !== null && !$scope.state.edit
  $scope.isCreating = () => $scope.state.create && !$scope.state.edit
  $scope.isEditing = () => !$scope.state.create && $scope.state.edit

  // Crud
  $scope.resetCreateForm = () => {
    $scope.newBookmarkCreation = {
      title: '',
      url: '',
      category: $scope.currentCategory.slug,
    }
  }

  $scope.createBookmark = bookmark => {
    bookmarks.push({
      ...bookmark,

      id: bookmarks.length,
    })

    $scope.resetCreateForm()
  }

  $scope.currentBookmark = null
  $scope.editedBookmark = {}

  $scope.resetEditForm = (bookmark = {}) => {
    $scope.currentBookmark = bookmark

    $scope.editedBookmark = angular.copy(bookmark)
    // $scope.editedBookmark = {
    //   ...bookmark,
    // }
  }

  $scope.isEditedBookmark = bookmark =>
    $scope.editedBookmark !== null
    && bookmark.id === $scope.editedBookmark.id
    && $scope.isEditing()

  $scope.editBookmark = editedBookmark => {
    const index = bookmarks.findIndex(bookmark => bookmark.id === editedBookmark.id)
    bookmarks.splice(index, 1, editedBookmark)

    $scope.cancelForm()
  }

  $scope.deleteBookmark = deletedBookmark => {
    if (confirm(`Stai per cancellare un Segnalibr. L'operazione non è reversibile.`)) {
      $scope.cancelForm()

      const index = bookmarks.findIndex(bookmark => bookmark.id === deletedBookmark.id)
      bookmarks.splice(index, 1)
    }
  }
})
