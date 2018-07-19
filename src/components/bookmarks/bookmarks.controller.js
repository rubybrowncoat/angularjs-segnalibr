class BookmarksController {
  // @ngInject
  constructor($timeout, $ngRedux, BookmarksActions) {
    this.$timeout = $timeout
    this.$store = $ngRedux

    this.BookmarksActions = BookmarksActions
  }

  $onInit() {
    this.$store.subscribe(() => {
      const {
        bookmarks,
        bookmark,

        category
      } = this.$store.getState()

      this.bookmarks = bookmarks

      this.currentBookmark = bookmark
      this.currentCategory = category
    })

    this.$store.dispatch(this.BookmarksActions.fetchBookmarks())

    this.$timeout(() => {
      const bookmarksPayload = [
        {
          "id": 1,
          "title": "AngularJS",
          "url": "https://angularjs.org",
          "category": "development"
        },
        {
          "id": 2,
          "title": "Node.js",
          "url": "https://nodejs.org",
          "category": "development"
        },
        {
          "id": 3,
          "title": "GitHub",
          "url": "https://github.com",
          "category": "development"
        },
        {
          "id": 4,
          "title": "Material Design",
          "url": "https://material.io/design/",
          "category": "design"
        },
        {
          "id": 5,
          "title": "Dwarf Fortress",
          "url": "http://www.bay12games.com/dwarves/",
          "category": "videogames"
        },
        {
          "id": 6,
          "title": "The Noun Project",
          "url": "https://thenounproject.com",
          "category": "design"
        },
        {
          "id": 7,
          "title": "Rocket League",
          "url": "https://www.rocketleague.com",
          "category": "videogames"
        },
        {
          "id": 8,
          "title": "Honorverse",
          "url": "https://en.wikipedia.org/wiki/Honorverse",
          "category": "scifi"
        },
      ]

      this.$store.dispatch(this.BookmarksActions.fetchBookmarks(bookmarksPayload))
    }, 3000);
  }

  getCurrentCategorySlug() {
    return this.currentCategory ? this.currentCategory.slug : ''
  }

  getCurrentCategoryName() {
    return this.currentCategory ? this.currentCategory.name : null
  }

  selectBookmark(bookmark) {
    this.$store.dispatch(this.BookmarksActions.selectBookmark(bookmark))
  }

  resetSelectedBookmark() {
    this.$store.dispatch(this.BookmarksActions.resetSelectedBookmark())
  }

  isCurrentBookmark(bookmark) {
    return this.currentBookmark && this.currentBookmark.id === bookmark.id
  }

  saveBookmark(bookmark) {
    this.$store.dispatch(this.BookmarksActions.saveBookmark(bookmark))
  }

  deleteBookmark(bookmark) {
    this.$store.dispatch(this.BookmarksActions.deleteBookmark(bookmark))
  }

  onSave(bookmark) {
    this.saveBookmark(bookmark)

    this.resetSelectedBookmark()
  }
}

export default BookmarksController
