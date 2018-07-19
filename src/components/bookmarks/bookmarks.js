import angular from 'angular'

import { BookmarksActions } from './bookmarks.state'
import BookmarkSaveModule from '../bookmark.save/bookmark.save'

import bookmarksComponent from './bookmarks.component'

const BookmarksModule = angular.module('segnalibr.bookmarks', [
  BookmarkSaveModule.name,
])
.factory('BookmarksActions', BookmarksActions)
.component('bookmarks', bookmarksComponent)

export default BookmarksModule
