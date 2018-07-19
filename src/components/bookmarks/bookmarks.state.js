import UidGenerator from '../../utils/uid'
const bookmarkUids = new UidGenerator('bookmark-')

// Bookmarks
export const FETCH_BOOKMARKS = 'FETCH_BOOKMARKS'

export const CREATE_BOOKMARK = 'CREATE_BOOKMARK'
export const UPDATE_BOOKMARK = 'UPDATE_BOOKMARK'
export const DELETE_BOOKMARK = 'DELETE_BOOKMARK'

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
    case CREATE_BOOKMARK: {
      state.push(payload)

      return state
    }
    case UPDATE_BOOKMARK: {
      const index = state.findIndex(bookmark => bookmark.id === payload.id)

      state.splice(index, 1, payload)

      return state
    }
    case DELETE_BOOKMARK: {
      if (confirm(`Stai per cancellare un Segnalibr. L'operazione non è reversibile.`)) {
        const index = state.findIndex(bookmark => bookmark.id === payload.id)

        state.splice(index, 1)
      }

      return state
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

  const saveBookmark = bookmark => {
    const hasId = !!bookmark.id

    return {
      type: hasId ? UPDATE_BOOKMARK : CREATE_BOOKMARK,
      payload: {
        ...bookmark,

        id: hasId ? bookmark.id : bookmarkUids.generate(),
      },
    }
  }

  const deleteBookmark = bookmark => ({
    type: DELETE_BOOKMARK,
    payload: bookmark,
  })

  const selectBookmark = (bookmark = bookmarkDefaultState) => {
    const { category } = $ngRedux.getState()

    return {
      type: GET_SELECTED_BOOKMARK,
      payload: bookmark.id
        ? { ...bookmark }
        : { category: category.slug },
    }
  }

  const resetSelectedBookmark = () => ({
    type: RESET_SELECTED_BOOKMARK,
  })

  return {
    fetchBookmarks,

    saveBookmark,
    deleteBookmark,

    selectBookmark,
    resetSelectedBookmark,
  }
}
