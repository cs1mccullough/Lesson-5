// 'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])

    .controller('View1Ctrl', function ($scope, $http) {
        $scope.venueList = new Array();
        $scope.mostRecentReview;
        $scope.getVenues = function () {
            var placeEntered = document.getElementById("txt_placeName").value;
            var searchQuery = document.getElementById("txt_searchFilter").value;
            if (placeEntered != null && placeEntered != "" && searchQuery != null && searchQuery != "") {
//https://developer.foursquare.com/docs/api/venues/search
                //This is the API that gives the list of venues based on the place and search query.
                var handler = $http.get("https://api.foursquare.com/v2/venues/search" +
                    "?client_id=BR0PTKCW4IKQ0L1LDVQJO1OYYBLLT5DIMMZ0YJRI5COV0BK1" +
                    "&client_secret=OXE5FIGSAPZO2ZVLLMK4ZSGBTQAB1D3L3F13M4KHLRSM5KDE" +
                    "&v=20160215&limit=5" +
                    "&near=" + placeEntered +
                    "&query=" + searchQuery);

                handler.success(function (data) {
                    if (data != null && data.response != null && data.response.venues != undefined && data.response.venues != null) {
                        // Tie an array named "venueList" to the scope which is an array of objects.
                        // Each object should have key value pairs where the keys are "name", "id" , "location" and values are their corresponding values from the response
                        // Marks will be distributed between logic, implementation and UI

                        $scope.venueList = Object.keys(data.response.venues).map(function (k){
                            $scope.isLoading=false;
                            var i = data.response.venues[k];
                            //var loc = data.response.venues.location.formattedAddress[k];
                            $scope.id = i.id;
                            return {name: i.name, id: i.id, address: i.location.address, city: i.location.city, zip: i.location.postalCode, country: i.location.country}
                        });



                    }

                });
                handler.error(function (data) {
                    alert("There was some error processing your request. Please stop.");
                });
            }
        }
    });