import UidGenerator from '../../utils/uid'
const bookmarkUids = new UidGenerator('bookmark-')

// Bookmarks
export const FETCH_BOOKMARKS = 'FETCH_BOOKMARKS'

// export const bookmarksDefaultState = []
export const bookmarksDefaultState = [
  {
    "id": 1,
    "title": "AngularJS",
    "url": "https://angularjs.org",
    "category": "development"
  },
  // {
  //   "id": 2,
  //   "title": "Node.js",
  //   "url": "https://nodejs.org",
  //   "category": "development"
  // },
  // {
  //   "id": 3,
  //   "title": "GitHub",
  //   "url": "https://github.com",
  //   "category": "development"
  // },
  // {
  //   "id": 4,
  //   "title": "Material Design",
  //   "url": "https://material.io/design/",
  //   "category": "design"
  // },
  // {
  //   "id": 5,
  //   "title": "Dwarf Fortress",
  //   "url": "http://www.bay12games.com/dwarves/",
  //   "category": "videogames"
  // },
  // {
  //   "id": 6,
  //   "title": "The Noun Project",
  //   "url": "https://thenounproject.com",
  //   "category": "design"
  // },
  // {
  //   "id": 7,
  //   "title": "Rocket League",
  //   "url": "https://www.rocketleague.com",
  //   "category": "videogames"
  // },
  // {
  //   "id": 8,
  //   "title": "Honorverse",
  //   "url": "https://en.wikipedia.org/wiki/Honorverse",
  //   "category": "scifi"
  // }
]

export const bookmarksReducer = (state = bookmarksDefaultState, { type, payload }) => {
  switch(type) {
    case FETCH_BOOKMARKS: {
      return payload || state
    }
    default: {
      return state
    }
  }
}

// Bookmark
export const GET_SELECTED_BOOKMARK = 'GET_SELECTED_BOOKMARK'
export const RESET_SELECTED_BOOKMARK = 'RESET_SELECTED_BOOKMARK'

export const bookmarkDefaultState = {
  id: null,
  title: '',
  url: '',
  category: null,
}

export const bookmarkReducer = (state = bookmarkDefaultState, { type, payload }) => {
  switch(type) {
    case GET_SELECTED_BOOKMARK: {
      return payload || state
    }
    case RESET_SELECTED_BOOKMARK: {
      return bookmarkDefaultState
    }
    default: {
      return state
    }
  }
}

// Actions
export const BookmarksActions = $ngRedux => {
  'ngInject'

  const fetchBookmarks = bookmarks => ({
    type: FETCH_BOOKMARKS,
    payload: bookmarks,
  })

  const selectBookmark = (bookmark = bookmarkDefaultState) => {
    const { category } = $ngRedux.getState()

    return {
      type: GET_SELECTED_BOOKMARK,
      payload: bookmark.id
        ? { ...bookmark }
        : { id: bookmarkUids.generate(), category: category.slug, new: true },
    }
}

  const resetSelectedBookmark = () => ({
    type: RESET_SELECTED_BOOKMARK,
  })

  return {
    fetchBookmarks,

    selectBookmark,
    resetSelectedBookmark,
  }
}
