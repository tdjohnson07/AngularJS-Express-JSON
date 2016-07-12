var app = angular.module('olympicGenerator', []);
app.controller('MainController', function($scope, $http){
  $scope.athletes=[];
  var archeryObject={
    method:'GET',
    url: 'athletes/archery'
  };
  function archerSuccess(response){
    $scope.archer=response.data;
    $scope.athletes.push($scope.archer);
    console.log($scope.archer);
  };
  function archerFailure(response){
    console.log("failed to Get Archer");
  };
  var basketballObject={
    method:'GET',
    url: 'athletes/basketball'
  };
  function basketballSuccess(response){
    $scope.bbplayer=response.data;
    $scope.athletes.push($scope.bbplayer);
    console.log($scope.bbplayer);
  };
  function basketballFailure(response){
    console.log("failed to Get basketball player");
  };
  var taekwondoObject={
    method:'GET',
    url: 'athletes/taekwondo'
  };
  function taekwondoSuccess(response){
    $scope.taek=response.data;
    $scope.athletes.push($scope.taek);
    console.log($scope.taek);
  };
  function taekwondoFailure(response){
    console.log("failed to Get taekwondo");
  };
  var tableTennisObject={
    method:'GET',
    url: 'athletes/tableTennis'
  };
  function tableTennisSuccess(response){
    $scope.pingPong=response.data;
    $scope.athletes.push($scope.pingPong);
    console.log($scope.pingPong);
  };
  function tableTennisFailure(response){
    console.log("failed to Get Table Tennis");
  };
  var pentathlonObject={
    method:'GET',
    url: 'athletes/pentathlon'
  };
  function pentathlonSuccess(response){
    $scope.pent=response.data;
    $scope.athletes.push($scope.pent);
    console.log($scope.pent);
  };
  function pentathlonFailure(response){
    console.log("failed to Get pentathlon");
  };
  $scope.generate = function(){
    $scope.athletes=[];
    $http(archeryObject).then(archerSuccess, archerFailure);
    $http(basketballObject).then(basketballSuccess, basketballFailure);
    $http(taekwondoObject).then(taekwondoSuccess, taekwondoFailure);
    $http(tableTennisObject).then(tableTennisSuccess, tableTennisFailure);
    $http(pentathlonObject).then(pentathlonSuccess, pentathlonFailure);
  }
});
