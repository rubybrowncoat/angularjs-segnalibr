import UidGenerator from '../../utils/uid'
const bookmarkUids = new UidGenerator('bookmark-')

const ENDPOINTS = {
  FETCH: () => 'http://localhost:4242/bookmarks',
  POST: () => 'http://localhost:4242/bookmarks',
  PUT: (bookmark) => `http://localhost:4242/bookmarks/${bookmark.id}`,
  DELETE: (bookmark) => `http://localhost:4242/bookmarks/${bookmark.id}`,
}

// Bookmarks
export const FETCH_BOOKMARKS = 'FETCH_BOOKMARKS'

export const CREATE_BOOKMARK = 'CREATE_BOOKMARK'
export const UPDATE_BOOKMARK = 'UPDATE_BOOKMARK'
export const DELETE_BOOKMARK = 'DELETE_BOOKMARK'

export const bookmarksDefaultState = []

export const bookmarksReducer = (state = bookmarksDefaultState, { type, payload }) => {
  switch(type) {
    case FETCH_BOOKMARKS: {
      return payload || state
    }
    case CREATE_BOOKMARK: {
      return [...state, payload]
    }
    case UPDATE_BOOKMARK: {
      const index = state.findIndex(bookmark => bookmark.id === payload.id)

      return [...state.slice(0, index), payload, ...state.slice(index + 1)]
    }
    case DELETE_BOOKMARK: {
      if (confirm(`Stai per cancellare un Segnalibr. L'operazione non è reversibile.`)) {
        const index = state.findIndex(bookmark => bookmark.id === payload.id)

        return [...state.slice(0, index), ...state.slice(index + 1)]
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
export const BookmarksActions = ($ngRedux, $http, $q) => {
  'ngInject'

  const getData = result => result.data

  const fetchBookmarks = () => (dispatch, getState) => {
    const { bookmarks } = getState()

    return $q.when(
      bookmarks.length ? bookmarks : $http.get(ENDPOINTS.FETCH()).then(getData)
    ).then(data => dispatch({
      type: FETCH_BOOKMARKS,
      payload: data,
    }))
  }

  const saveBookmark = bookmark => dispatch => {
    const hasId = !!bookmark.id

    if (hasId) {
      return $http.put(ENDPOINTS.PUT(bookmark), bookmark).then(getData).then(data => dispatch({
        type: UPDATE_BOOKMARK,
        payload: data,
      }))
    }

    return $http.post(ENDPOINTS.POST(), bookmark).then(getData).then(data => dispatch({
      type: CREATE_BOOKMARK,
      payload: data,
    }))
  }

  const deleteBookmark = bookmark => dispatch => {
    return $http.delete(ENDPOINTS.DELETE(bookmark), bookmark).then(getData).then(() => dispatch({
      type: DELETE_BOOKMARK,
      payload: bookmark,
    }))
  }

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
