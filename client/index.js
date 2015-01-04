/**
 * Created by E on 1/4/2015.
 */
var app = angular.module('App',[]);

app.controller('allRecipes',function($scope,$http){

    $scope.recipes = null;

    this.getallRecp = function(){
    $http.get('recipes/AllRescp.json').success(function(data){
        debugger;
        $scope.recipes =data;
    });
}
});