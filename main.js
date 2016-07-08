var app = angular.module( "ParaDoksa", [] );
  app.controller(
        "myController",
           function( $scope ) { 
                $scope.ty = { name: "Tavuk Yumurtadan", value: 1 };
                $scope.yt = { name: "Yumurta Tavuktan", value: 2 };   
                $scope.answer= { name: "toz bulutu", value: 0 };  
                $scope.updateCount = 0;
                $scope.$watch(
                    function( $scope ) {
                        console.log( "izlemede: "+ $scope.answer.name );
                        return( $scope.answer.name );
                    },
                    function(newValue, oldValue) {
                        if (newValue === oldValue) { return; }
                            $scope.updateCount++;
                            console.log($scope.updateCount+ " kere fikir değiştirildi");
                });      
                $scope.setAnswer = function( armut ) { 
                     $scope.answer = armut;  
                };     
            });
