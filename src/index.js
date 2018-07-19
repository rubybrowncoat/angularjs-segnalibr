import angular from 'angular'

import ngAnimate from 'angular-animate'
import uiRouter from '@uirouter/angularjs'

import 'bootstrap'
import './index.scss'

import Store from './app/app.store'
import {
  categoriesReducer,
  categoriesDefaultState
} from './components/categories/categories.state'

import appComponent from './app/app.component'

import ModelsModule from './models/models'
import ComponentsModule from './components/components'

const store = new Store(categoriesReducer, categoriesDefaultState)

angular.module('Segnalibr', [
  ngAnimate,
  uiRouter,

  ModelsModule.name,
  ComponentsModule.name,
])
.value('$store', store)
.component('app', appComponent)
