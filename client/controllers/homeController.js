angular
  .module('PM.HomeController', ['ngRoute', 'PM.UserFactory'])
  .controller('HomeController', ['$scope', 'UserFactory', HomeController]);

function HomeController($scope, UserFactory) {
  $scope.name = 'Will';
  $scope.userNameLogin = '';
  $scope.passwordLogin = '';
  $scope.userNameSignup = '';
  $scope.passwordSignup = '';
  $scope.signup = function () {
    UserFactory.signup({ userName: $scope.userNameSignup, password: $scope.passwordSignup });
  };
  $scope.login = function () {
    UserFactory.login({ userName: $scope.userNameLogin, password: $scope.passwordLogin });
  };
}
