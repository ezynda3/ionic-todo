// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('todo', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller('TodoCtrl', ['$scope', function($scope) {
    var tasksJSON = window.localStorage['tasks'];
    
    if (tasksJSON) {
        $scope.tasks = angular.fromJson(tasksJSON);    
    } else {
        $scope.tasks = [];
    }

    $scope.addTask = function() {
        if ($scope.newTask) {
            $scope.tasks.push({name: $scope.newTask});
            $scope.newTask = null;
            window.localStorage['tasks'] = angular.toJson($scope.tasks)
            return;
        }
        $scope.newTask = null;
        return;
    }

    $scope.deleteTask = function(index) {
        $scope.tasks.splice(index, 1);
        window.localStorage['tasks'] = angular.toJson($scope.tasks)
        return;
    }
}])
