const app = angular.module('projectManagement', ['ngRoute', 'PM.HomeController', 'PM.ProjectController']);
function configFunction($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: './partials/home.html',
    controller: 'HomeController',
  }).when('/projects', {
    templateUrl: './partials/projects.html',
    controller: 'ProjectController',
  });
}

app.config(configFunction);
