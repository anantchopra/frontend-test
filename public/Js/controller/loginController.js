app.controller('loginController', ['$scope','services', function($scope,services) {
  $scope.login=function(userName,password)	{
		services.authenticate(userName,password);
	};
	
}]);