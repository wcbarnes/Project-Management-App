angular
  .module('PM.ProjectFactory', [])
  .factory('ProjectFactory', ['$http', ProjectFactory]);

function ProjectFactory($http) {
  const url = 'http://localhost:3000/projects';
  const projects = {
    fetch: () => $http.get(url),
    post: (postData) => $http.post(url, postData),
  };
  return projects;
}
