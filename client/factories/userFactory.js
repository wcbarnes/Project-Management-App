angular
  .module('PM.UserFactory', [])
  .factory('UserFactory', ['$http', '$location', UserFactory]);

function UserFactory($http, $location) {
  return {
    signup: (userData) => $http.post('http://localhost:3000/signup', JSON.stringify(userData)).success((result) => {
      console.log(result);
      $location.path('/projects');
    }),
    login: (userData) => $http.post('http://localhost:3000/login', JSON.stringify(userData)).success((foundUser) => {
      console.log(foundUser);
      if (foundUser) {
        $location.path('/projects');
      }
    }),
  };
}

