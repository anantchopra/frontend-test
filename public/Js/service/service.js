app.service('services',['$http','$location','$window',function($http,$location,$window){
	
this.authenticate=function(userName,password){	
		$http.post('/login', {"user": userName, "password": password}).
		then(function(response) {			
			console.log("success");
			$window.location.href = '/states.html';			
	}, function(response) {
		console.log("failure");
	});	
};

this.logout=function(){
	
	$http.get('/logout').
	then(function(response){
		console.log("logged out succesfully");
		$window.location.href = '/login.html';		
	},function(error){
		console.log("failure");
	});
};



}]);