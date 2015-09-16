//States specific Controller
app.controller('statesController', ['$scope','$http','services', function($scope,$http,services) {
  $scope.states=[];
  $scope.selectedStateDetails=[];
  $scope.populateStates=function()	{
	$http.get('/states').
		then(function(response) {
			console.log("success");
			$scope.states= response.data;
			$scope.selectedStateDetails=response.data[0];
	}, function(response) {
		console.log("failure");
	});	
	};
	
	$scope.getStateDetails=function(state){
		$scope.selectedStateDetails=state;		
	};
	$scope.logout=function(){
		services.logout();		
	};
}]);


