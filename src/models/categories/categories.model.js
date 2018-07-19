class CategoriesModel {
  constructor() {
    this.categories = [
      {
         "id": 42,
         "slug": "development",
         "name": "Development"
      },
      {
         "id": 16,
         "slug": "design",
         "name": "Design"
      },
      {
         "id": 70,
         "slug": "videogames",
         "name": "Video Games"
      },
      {
         "id": 41,
         "slug": "scifi",
         "name": "Science Fiction"
      }
    ]
  }
}

export default CategoriesModel

// angular.module('segnalibr.models.categories', [
//   // Dependencies
// ])
// .service('CategoriesModel', ['$http', '$q', function(http, que) {
//   let categories = []
//   let currentCategory = null

//   const endpoints = {
//     fetch: 'data/categories.json',
//   }

//   const getData = response => response.data
//   const gatherCategories = response => categories = getData(response)

//   const findCategoryBySlug = categorySlug =>
//     categories.find(category => category.slug === categorySlug)

//   this.getCategories = () => que.when(categories.length
//     ? categories
//     : http.get(endpoints.fetch).then(gatherCategories)
//   )

//   this.getCategoryBySlug = categorySlug => {
//     const deferred = que.defer()

//     if (categories.length) {
//       deferred.resolve(findCategoryBySlug(categorySlug))
//     } else {
//       this.getCategories()
//         .then(() => deferred.resolve(findCategoryBySlug(categorySlug)))
//     }

//     return deferred.promise
//   }

//   this.setCurrentCategoryBySlug = categorySlug => {
//     this.getCategoryBySlug(categorySlug)
//       .then(category => currentCategory = category)
//   }

//   this.getCurrentCategory = () => currentCategory
//   this.getCurrentCategorySlug = () => currentCategory ? currentCategory.slug : ''
// }])
