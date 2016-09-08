angular
  .module('PM.ProjectFactory', [])
  .factory('ProjectFactory', ['$http', '$location', ProjectFactory]);

function ProjectFactory($http, $location) {
  const url = 'http://localhost:3000/projects';
  const projects = {
    fetch: () => $http.get(url),
    post: (postData) => $http.post(url, postData),
    logOut: () => $location.path('/'),
  };
  return projects;
}
