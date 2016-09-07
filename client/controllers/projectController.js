angular
  .module('PM.ProjectController', ['ngRoute', 'PM.ProjectFactory', 'PM.TaskFactory'])
  .controller('ProjectController', ['$scope', 'ProjectFactory', 'TaskFactory', ProjectController]);


function ProjectController($scope, ProjectFactory, TaskFactory) {
  $scope.name = 'Will';
  $scope.projects = [];
  $scope.projectName = '';
  $scope.task = '';
  $scope.tasks = [];
  $scope.fetch = function () {
    ProjectFactory.fetch().success((data) => {
      $scope.name = data[0].userName;
      $scope.tasks = data[0].children;
      $scope.projects = data[0].children;
      console.log(data[0].children);
    });
  };
  $scope.createProject = function () {
    ProjectFactory.post({ projectName: $scope.projectName }).success((data) => {
      $scope.projectName = '';
      $scope.fetch();
    });
  };
  $scope.addTask = function () {
    TaskFactory.post({ task: this.task, projectID: this.project._id }).success((data) => {
      console.log('this: ', data);
      this.task = '';
      $scope.fetch();
    });
  };
  // $scope.fetchTasks = function () {
  //   TaskFactory.fetch().success
  // }
  $scope.fetch();
}
