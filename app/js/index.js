/**
 * Created by lyx on 2017/9/28.
// */
var app = angular.module('myApp',[]);
app.controller('myController',function($scope){
    $scope.mydata = {data123:"123"};
    $scope.mydata2 = "12345";
    $scope.handleClick = function(){
        alert("hello angular");
    }
});
