import angular from 'angular'

import ngAnimate from 'angular-animate'
import uiRouter from '@uirouter/angularjs'

import 'bootstrap'
import './index.scss'

import appComponent from './components/app/app.component'

import ComponentsModule from './components/components'

angular.module('Segnalibr', [
  ngAnimate,
  uiRouter,

  ComponentsModule.name,
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'segnalibr',
    url: '',
    abstract: true,
  })

  $urlRouterProvider.otherwise('/')
})
.component('app', appComponent)
