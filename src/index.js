import angular from 'angular'

import ngRedux from 'ng-redux'
import ngAnimate from 'angular-animate'
import uiRouter from '@uirouter/angularjs'

import 'bootstrap'
import './index.scss'

import {
  categoriesReducer,
  categoriesDefaultState
} from './components/categories/categories.state'

import appComponent from './app/app.component'

import ModelsModule from './models/models'
import ComponentsModule from './components/components'

const storeConfig = $ngReduxProvider => {
  $ngReduxProvider.createStoreWith(categoriesReducer, [], [], categoriesDefaultState)
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
