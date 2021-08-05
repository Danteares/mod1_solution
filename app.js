(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
   
    function LunchCheckController($scope) {
        $scope.dishes="";
        $scope.message="";
        $scope.checkDishes= function(){
            var listofDishes=$scope.dishes.split(',');
            
            listofDishes=listofDishes.filter(elem => elem.trim());
            console.log(listofDishes);
            if($scope.dishes){
                if(listofDishes.length<=3){
                $scope.message="Enjoy!";
                }
                else{
                $scope.message="Too much!";
                }
            }
            else{
                $scope.message="Please enter data first";
            }
            
        };
        
    };
    
    })();
    