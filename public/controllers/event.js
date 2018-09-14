angular.module('nhs')

.controller('eventCreate', ['$scope', "$state", "$rootScope", "$stateParams", "Event", "User", function($scope, $state, $rootScope, $stateParams, Event, User){
	$scope.eventData = {} || $scope.eventData;

	$scope.eventData.date = Date.now();
	Event.all().then(function(response){alert(response);});
	
	$scope.saveEvent = function(){
        User.addEvent($rootScope.user.id, $scope.eventData)
            .then(function() {
				Event.all().then(function(response){alert(response);});
				
				$state.go("dashboard");
            });
    };

    $scope.setUEvent = function setUpcomingEvent(uevent) {
        $scope.eventData.date = uevent.date;
    };

}])

.controller('eventEdit', ['$scope', "$state", "$rootScope", '$stateParams', 'Event', 'User', function($scope, $state, $rootScope, $stateParams, Event, User){
    
	var eventID = $stateParams.eventID;
    var pos = 0;
	var urls = [];
	var queue = []; //just b/c with callbacks, I can't tell what got added when
	//alert($rootScope.user.id);
	//User.addEvent($rootScope.user.id, eventID).then(function(data) {});
	
    Event.get(eventID)
        .then(function(event) {
            $scope.eventData = event;
        });

	Event.get("5b5e94f4f88d6eaa2cf05f89")
		.then(function(event) {
			urls.splice(0, 0, event.name);
		});
		
	Event.get("5b5e96f1f88d6eaa2cf05f8a")
		.then(function(event) {
			urls.splice(1, 0, event.name);
		});
	
	Event.get("5b5e96fbf88d6eaa2cf05f8b")
		.then(function(event) {
			urls.splice(2, 0, event.name);
		});
		
	Event.get("5b5e9702f88d6eaa2cf05f8c")
		.then(function(event) {
			urls.splice(3, 0, event.name);
		});
	
	Event.get("5b5e9709f88d6eaa2cf05f8d")
		.then(function(event) {
			urls.splice(4, 0, event.name);
		});
	
	Event.get("5b5e9710f88d6eaa2cf05f8e")
		.then(function(event) {
			urls.splice(5, 0, event.name);
		});
		
	Event.get("5b5e9717f88d6eaa2cf05f8f")
		.then(function(event) {
			urls.splice(6, 0, event.name);
		});
		
	Event.get("5b5e971ef88d6eaa2cf05f90")
		.then(function(event) {
			urls.splice(7, 0, event.name);
		});
		
	Event.get("5b5e9725f88d6eaa2cf05f91")
		.then(function(event) {
			urls.splice(8, 0, event.name);
		});
	
	Event.get("5b5e9710f88d6eaa2cf05f8e")
		.then(function(event) {
			urls.push(event.name);
			$scope.url1=urls[0];
			$scope.url2=urls[1];
			$scope.url3=urls[2];
			$scope.url4=urls[3];
			$scope.url5=urls[4];
			$scope.url6=urls[5];
			$scope.url7=urls[6];
			$scope.url8=urls[7];
			$scope.url9=urls[8];
		});
		
	$scope.switchPhoto = function(oldPhoto, newPhoto){
		
		var photoNum, i;
		
		for (i = 0; i < 9; i++){
			if (urls[i] == oldPhoto){
				photoNum = i;
			}
		}			
				
		$scope.eventData = {} || $scope.eventData;		
		$scope.eventData.name = newPhoto;
		
		switch(photoNum) {
			case 0:
				Event.update("5b5e94f4f88d6eaa2cf05f89", $scope.eventData);
				break;
			case 1:
				Event.update("5b5e96f1f88d6eaa2cf05f8a", $scope.eventData);
				break;
			case 2:
				Event.update("5b5e96fbf88d6eaa2cf05f8b", $scope.eventData);
				break;
			case 3:
				Event.update("5b5e9702f88d6eaa2cf05f8c", $scope.eventData);
				break;
			case 4:
				Event.update("5b5e9709f88d6eaa2cf05f8d", $scope.eventData);
				break;
			case 5:
				Event.update("5b5e9710f88d6eaa2cf05f8e", $scope.eventData);
				break;
			case 6:
				Event.update("5b5e9717f88d6eaa2cf05f8f", $scope.eventData);
				break;
			case 7:
				Event.update("5b5e971ef88d6eaa2cf05f90", $scope.eventData);
				break;
			case 8:
				Event.update("5b5e9725f88d6eaa2cf05f91", $scope.eventData);
				break;
			default:
				break;
		}
		
	}
	
    $scope.saveEvent = function(){
        Event.update(eventID, $scope.eventData)
            .then(function() {
                $state.go("dashboard");
            });
    };

    $scope.deleteEvent = function(){
        Event.delete(eventID)
            .then(function() {
                $state.go("dashboard");
            });

    };

    $scope.setUEvent = function setUpcomingEvent(uevent) {
		$scope.eventData.date = uevent.date;
    };
 
}])

.controller('upcomingEventCreate', ['$scope', "$state", "$rootScope", '$stateParams', 'UpcomingEvent', function($scope, $state, $rootScope, $stateParams, UpcomingEvent){

	$scope.saveEvent = function(){
        UpcomingEvent.create($scope.eventData)
            .then(function() {
                $state.go("dashboard");
            });
    };

	$scope.deleteUevent = function(ueventID) {
		UpcomingEvent.delete(ueventID)
			.then(function(resp) {
				var i;
				for(i=0; i<$rootScope.upcoming.length; i++) {
					var uevent = $rootScope.upcoming[i];
					if(ueventID === uevent._id) {
						break;
					}
				}
				$rootScope.upcoming.splice(i, 1);
			});
	};


}])

.controller('upcomingEventEdit', ['$scope', "$state", "$rootScope", '$stateParams', 'UpcomingEvent', function($scope, $state, $rootScope, $stateParams, UpcomingEvent){
	var ueventID = $stateParams.ueventID;

	// UpcomingEvent.get(ueventID)
	// 	.then(function(event) {
	// 		$scope.eventData = event;
	// 	});

	if(!$rootScope.upcoming) $state.go("dashboard");

	for(var i=0; i<$rootScope.upcoming.length; i++) {
		var currentUpcomingEvent = $rootScope.upcoming[i];
		if(currentUpcomingEvent._id === ueventID) {
			$scope.eventData = currentUpcomingEvent;
		}
	}

	$scope.saveEvent = function(){
        UpcomingEvent.update(ueventID, $scope.eventData)
            .then(function() {
                $state.go("dashboard");
            });
    };


}])

;
