angular
  .module('PM.TaskFactory', [])
  .factory('TaskFactory', ['$http', TaskFactory]);

function TaskFactory($http) {
  const url = 'http://localhost:3000/tasks';
  const tasks = {
    //fetch: () => $http.get(url),
    post: (postData) => $http.post(url, postData),
  };
  return tasks;
}
