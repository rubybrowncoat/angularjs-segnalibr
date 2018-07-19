import {
  categoryReducer,

  GET_CURRENT_CATEGORY,
} from './categories.state'

class CategoriesController {
  // @ngInject
  constructor($timeout, $ngRedux, CategoriesActions) {
    this.$timeout = $timeout
    this.$store = $ngRedux

    this.CategoriesActions = CategoriesActions

    this.categories = []
  }

  $onInit() {
    this.unsubscribe = this.$store.subscribe(() => {
      const { categories, category } = this.$store.getState()

      this.categories = categories
      this.currentCategory = category
    })

    this.$store.dispatch(this.CategoriesActions.fetchCategories())

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

      this.$store.dispatch(this.CategoriesActions.fetchCategories(categoriesPayload))
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
    this.$store.dispatch(this.CategoriesActions.selectCategory(category))
  }

  isCurrentCategory(category) {
    return this.currentCategory && this.currentCategory.slug === category.slug
  }
}

export default CategoriesController
