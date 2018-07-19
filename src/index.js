import angular from 'angular'

import ngRedux from 'ng-redux'
import ngAnimate from 'angular-animate'
import uiRouter from '@uirouter/angularjs'

import 'bootstrap'
import './index.scss'

import appComponent from './app/app.component'

import ModelsModule from './models/models'
import ComponentsModule from './components/components'

import thunk from 'redux-thunk'
import rootReducer from './app/app.store'

const storeConfig = $ngReduxProvider => {
  console.log(window.__REDUX_DEVTOOLS_EXTENSION__)

  $ngReduxProvider.createStoreWith(
    rootReducer,
    [thunk],
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
      : []
  )
}

angular.module('Segnalibr', [
  ngRedux,

  ngAnimate,
  uiRouter,

  ModelsModule.name,
  ComponentsModule.name,
])
.config(storeConfig)
.run(($ngRedux, $rootScope, $timeout) => {
  $ngRedux.subscribe(() => {
    $timeout(() => {$rootScope.$apply(() => {})}, 100)
  })
})
.component('app', appComponent)
