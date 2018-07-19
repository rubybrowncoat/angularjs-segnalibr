import {
  categoryReducer,

  FETCH_CATEGORIES,
  GET_CURRENT_CATEGORY,
} from './categories.state'

class CategoriesController {
  // @ngInject
  constructor($timeout, $store) {
    this.$timeout = $timeout
    this.$store = $store

    this.categories = []
  }

  $onInit() {
    this.unsubscribe = this.$store.subscribe(() => this.categories = this.$store.getState())

    this.$store.dispatch({
      type: FETCH_CATEGORIES
    })

    this.$timeout(() => {
      const categoriesPayload = [{
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
        },
      ]

      this.$store.dispatch({
        type: FETCH_CATEGORIES,
        payload: categoriesPayload,
      })
    }, 3000);

    // this.CategoriesModel.getCategories()
    //   .then(categories => this.categories = categories)
  }

  $onDestroy() {
    if (typeof this.unsubscribe === 'function') {
      this.unsubscribe()
    }
  }

  onCategorySelect(category) {
    this.currentCategory = categoryReducer(
      this.currentCategory, {
        type: GET_CURRENT_CATEGORY,
        payload: category
      }
    )
  }

  isCurrentCategory(category) {
    return this.currentCategory && this.currentCategory.slug === category.slug
  }
}

export default CategoriesController
