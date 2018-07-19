import angular from 'angular'

import bookmarkSaveComponent from './bookmark.save.component'

import './bookmark.save.scss'

let BookmarkSaveModule = angular.module('bookmarkSave', [
  // No Dependencies
])
.component('bookmarkSave', bookmarkSaveComponent);

export default BookmarkSaveModule;
