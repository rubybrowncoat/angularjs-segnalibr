angular.module('Segnalibr', [

])
.controller('MainController', $scope => {
  $scope.categories = [
    { id: 42, slug: 'development', name: 'Development' },
    { id: 16, slug: 'design', name: 'Design' },
    { id: 70, slug: 'videogames', name: 'Video Games' },
    { id: 41, slug: 'scifi', name: 'Science Fiction' },
  ]

  $scope.bookmarks = [
    { id: 1, title: 'AngularJS', url: 'https://angularjs.org', category: 'development' },
    { id: 2, title: 'Node.js', url: 'https://nodejs.org', category: 'development' },
    { id: 3, title: 'GitHub', url: 'https://github.com', category: 'development' },
    { id: 4, title: 'Material Design', url: 'https://material.io/design/', category: 'design' },
    { id: 5, title: 'Dwarf Fortress', url: 'http://www.bay12games.com/dwarves/', category: 'videogames' },
    { id: 6, title: 'The Noun Project', url: 'https://thenounproject.com', category: 'design' },
    { id: 7, title: 'Rocket League', url: 'https://www.rocketleague.com', category: 'videogames' },
    { id: 8, title: 'Honorverse', url: 'https://en.wikipedia.org/wiki/Honorverse', category: 'scifi' },
  ]

  $scope.currentCategory = null

  $scope.setCategory = category => {
    $scope.cancelForm()

    $scope.currentCategory = category
  }

  $scope.isCurrentCategory = category =>
    $scope.currentCategory !== null
    && category.slug === $scope.currentCategory.slug

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
    console.log(bookmark)

    $scope.bookmarks.push({
      ...bookmark,

      id: $scope.bookmarks.length,
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
    console.log(editedBookmark)

    const index = $scope.bookmarks.findIndex(bookmark => bookmark.id === editedBookmark.id)
    $scope.bookmarks.splice(index, 1, editedBookmark)

    $scope.cancelForm()
  }
})
