tournamentApp.controller('tournamentController', ['$scope', function($scope) {

  $scope.players = [];
  $scope.addPlayer = function(){

    $scope.players.push(angular.copy($scope.player));
    var i,b;
    for (i = 0; i < $scope.playersList.length; i++) {
      if($scope.player.name == $scope.playersList[i].name) {
        $scope.playersList[i].games++;
        b = true;
      }
    }
    if (!b) {
      $scope.player.games = 1;
      $scope.player.wins = 0;
      $scope.playersList.push(angular.copy($scope.player));
    }
    localStorage.setItem("pongtrack", JSON.stringify($scope.playersList));
    $scope.init();
  }

  $scope.doTournament = function(){
    var tmp = shuffle(angular.copy($scope.players));
    var tmpTractat = [];
    for (var i = 0; i < tmp.length -1 ; i += 2){
      var obj = {};
      obj.player1 = tmp[i];
      obj.player2 = tmp[i +1];
      tmpTractat.push(obj);
    }
    if (tmpTractat.length == 4){
      $scope.playersRandom8 = angular.copy(tmpTractat);
    } else if (tmpTractat.length == 2 ){
      $scope.playersRandom4 = angular.copy(tmpTractat);
    }
  }

  $scope.win4 = function(winner){
    var i;
    for (i = 0; i < $scope.playersList.length; i++) {
      if(winner.name == $scope.playersList[i].name) {
        $scope.playersList[i].wins++;
        $scope.playersList[i].games++;
      }
    }
    localStorage.setItem("pongtrack", JSON.stringify($scope.playersList));
    if ($scope.playersRandom2.length == 0){
      $scope.playersRandom2.push({player1: winner});
    } else if ($scope.playersRandom2.length == 1) {
      if ($scope.playersRandom2[0].player2 == undefined || $scope.playersRandom2[0].player2 == null){
        $scope.playersRandom2[0].player2 = winner;
      }
    }
  }

  $scope.win8 = function(winner){
    var i;
    for (i = 0; i < $scope.playersList.length; i++) {
      if(winner.name == $scope.playersList[i].name) {
        $scope.playersList[i].wins++;
        $scope.playersList[i].games++;
      }
    }
    localStorage.setItem("pongtrack", JSON.stringify($scope.playersList));
    if ($scope.playersRandom4.length == 0){
      $scope.playersRandom4.push({player1: winner});
    } else if ($scope.playersRandom4.length == 1) {
      if ($scope.playersRandom4[0].player2 == undefined || $scope.playersRandom4[0].player2 == null){
        $scope.playersRandom4[0].player2 = winner;
      } else {
        $scope.playersRandom4.push({player1: winner});
      }
    } else {
      $scope.playersRandom4[1].player2 = winner;
    }
  }

  $scope.disableDoTournament = function(){
    if ($scope.players.length == 4 || $scope.players.length == 8 ){
      return false;
    } else {
      return true;
    }
  }

  $scope.init = function(){
    $scope.player = {};
    $scope.player.name = "";
    $scope.playersRandom2 = [];
    $scope.playersRandom4 = [];
    $scope.playersRandom8 = [];
    $scope.playersList = JSON.parse(localStorage.getItem("pongtrack")) || [];
  }
  $scope.init();
}]);

function shuffle(array) {
    var counter = array.length, temp, index;

    while (counter > 0) {
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
