import template from './bookmark.save.html'
import controller from './bookmark.save.controller'

const bookmarkSaveComponent = {
  bindings: {
    bookmark: '<',
    save: '&',
    cancel: '&'
  },

  template,

  controller,
  controllerAs: 'bookmarkSaveController',
}

export default bookmarkSaveComponent
