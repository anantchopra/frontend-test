//Guestbook specific controller
app.controller('guestbookController', ['$scope','$http', function($scope,$http) {
  $scope.messages=[];
  
  $scope.getMessages=function()	{
	$http.get('/read').
		then(function(response) {
			console.log("success");
			$scope.messages= response.data;
			$scope.selectedMessage=response.data[0];
	}, function(response) {
		console.log("failure");
	});	
	};
	
	$scope.addMessage=function()	{
		var phone="123";var message="message";
	$http.post('/write',{"phone": phone, "message": message} ).
		then(function(response) {
			$scope.messages=response.data;
			console.log("success");			
	}, function(response) {
		console.log("failure");
	});	
	};
	$scope.getMessageDetails=function(message){
		$scope.selectedStateDetails=message;		
	};
	
}]);