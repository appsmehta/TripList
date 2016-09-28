var app =  angular.module("TripListApp");

	app.controller("mainController",function($scope,$http){

		$scope.sources = ["San Jose","San Francisco","Point Reyes"];
		$scope.destinations = ["San Jose","San Francisco","Point Reyes"];
		$scope.itinerary={};
		$scope.itinerary.selectedSource = "";
		$scope.itinerary.selectedDestination = "";
		$scope.itineraryLog=[];


		$scope.checkValidTrip= function(){
		$http.post("/checkTrip",

			{source:$scope.itinerary.selectedSource,destination:$scope.itinerary.selectedDestination}).

		then(function(data){
			if(data.status==200){
				if(data.data.valid){
					$scope.itineraryLog.push({source:$scope.itinerary.selectedSource,destination:$scope.itinerary.selectedDestination});
				}
				
			}
		});

	}
});