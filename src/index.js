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
  $ngReduxProvider.createStoreWith(rootReducer, [thunk])
}

angular.module('Segnalibr', [
  ngRedux,

  ngAnimate,
  uiRouter,

  ModelsModule.name,
  ComponentsModule.name,
])
.config(storeConfig)
.component('app', appComponent)
