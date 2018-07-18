angular.module('segnalibr.models.categories', [
  // Dependencies
])
.service('CategoriesModel', function() {
  const categories = [
    { id: 42, slug: 'development', name: 'Development' },
    { id: 16, slug: 'design', name: 'Design' },
    { id: 70, slug: 'videogames', name: 'Video Games' },
    { id: 41, slug: 'scifi', name: 'Science Fiction' },
  ]

  this.getCategories = () => categories
})
