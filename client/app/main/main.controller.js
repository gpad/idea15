'use strict';

angular.module('idea15App')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    var calculateColor = function(mood) {
      console.log(mood);
      if (mood == 'joy') return "#ffcc00";
      return "#cc0000"
    };

    $scope.startMood = function() {
        $http.get('/api/moods').success(function(mood) {
          $scope.mood = mood;
          $scope.moodColor = calculateColor(mood);
          socket.syncUpdates('mood', $scope.mood);
      });
    };

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
    $scope.startMood();
  });
