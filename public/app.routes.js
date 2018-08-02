angular.module('nhs')

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "templates/login.html",
            controller: "login"
        })
		.state("signup", {
            url: "/signup",
            templateUrl: "templates/signup.html",
            controller: "signup"
        })
        .state("dashboard", {
            url: "/dashboard",
            templateUrl: "templates/dashboard.html",
            controller: "dashboard"
        })
        .state("event", {
            url: "/event",
            template: "<div ui-view></div>",
            abstract: true
        })
        .state("event.create", {
            url: "/create",
            templateUrl: "templates/event.html",
            controller: "eventCreate"
        })
        .state("event.edit", {
            url: "/edit/:eventID",
            templateUrl: "templates/event.html",
            controller: "eventEdit"
        })
		.state("uevent", {
            url: "/upcoming-event",
            template: "<div ui-view></div>",
            abstract: true
        })
        .state("uevent.create", {
            url: "/create",
            templateUrl: "templates/uevent.html",
            controller: "upcomingEventCreate"
        })
		.state("uevent.all", {
            url: "/all",
            templateUrl: "templates/uevent-all.html",
            controller: "upcomingEventCreate"
        })
        .state("uevent.edit", {
            url: "/edit/:ueventID",
            templateUrl: "templates/uevent.html",
            controller: "upcomingEventEdit"
        })
		.state("memberList", {
            url: "/members/",
            templateUrl: "templates/members.html",
            controller: "memberList"
        })
		.state("singleMember", {
			url: "/member/:memberID",
			templateUrl: "templates/single-member.html",
			controller: "singleMember"
		})
                .state("contact", {
			url: "/contact",
<<<<<<< HEAD
			templateUrl: "templates/contact.html"
		    //controller: "contact"
=======
			templateUrl: "templates/contact.html",
			controller: "contact"
>>>>>>> 3e52eb9821aae163e70b09eb4aa072b006f4e3b7
		})
                .state("photos", {
			url: "/photos",
			templateUrl: "templates/photos.html",
<<<<<<< HEAD
			controller: "eventEdit"
=======
			controller: "photos"
>>>>>>> 3e52eb9821aae163e70b09eb4aa072b006f4e3b7
		})
        ;
}])


;
