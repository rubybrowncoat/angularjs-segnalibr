import angular from 'angular'

import bookmarksComponent from './bookmarks.component'

const BookmarksModule = angular.module('segnalibr.bookmarks', [
  // No Dependencies
])
.component('bookmarks', bookmarksComponent)

export default BookmarksModule
