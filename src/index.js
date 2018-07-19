import angular from 'angular'

import ngAnimate from 'angular-animate'
import uiRouter from '@uirouter/angularjs'

import 'bootstrap'
import './index.scss'

import appComponent from './components/app/app.component'

angular.module('Segnalibr', [
  ngAnimate,
  uiRouter,
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
