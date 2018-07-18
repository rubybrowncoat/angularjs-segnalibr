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
    { id: 0, title: 'AngularJS', url: 'https://angularjs.org', category: 'development' },
    { id: 1, title: 'Node.js', url: 'https://nodejs.org', category: 'development' },
    { id: 2, title: 'GitHub', url: 'https://github.com', category: 'development' },
    { id: 3, title: 'Material Design', url: 'https://material.io/design/', category: 'design' },
    { id: 4, title: 'Dwarf Fortress', url: 'http://www.bay12games.com/dwarves/', category: 'videogames' },
    { id: 5, title: 'The Noun Project', url: 'https://thenounproject.com', category: 'design' },
    { id: 6, title: 'Rocket League', url: 'https://www.rocketleague.com', category: 'videogames' },
    { id: 7, title: 'Honorverse', url: 'https://en.wikipedia.org/wiki/Honorverse', category: 'scifi' },
  ]

  $scope.currentCategory = null

  $scope.setCategory = category => {
    $scope.cancelForm()

    $scope.currentCategory = category
  }

  $scope.isCurrentCategory = category =>
    $scope.currentCategory !== null && category.slug === $scope.currentCategory.slug

  // State
  $scope.state = {
    create: false,
    edit: false,
  }

  $scope.doCreate = () => {
    $scope.state.create = true
    $scope.state.edit = false
  }

  $scope.doEdit = () => {
    $scope.state.create = false
    $scope.state.edit = true
  }

  $scope.cancelForm = () => {
    $scope.state.create = false
    $scope.state.edit = false
  }

  $scope.canCreate = () => $scope.currentCategory !== null && !$scope.state.edit
  $scope.isCreating = () => $scope.state.create && !$scope.state.edit
  $scope.isEditing = () => !$scope.state.create && $scope.state.edit
})
