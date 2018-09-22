//$scope.SendData = function () {
    // тут данные
//    var textApi='Hello';
//    var langApi='en-ru';
//    var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?";
//    var  keyAPI ="trnsl.1.1.20161125T152027Z.65e73e18a60f3051.7764a7a11754995544ad557501df9e14abbfb6e0";

//    params ='key='+keyAPI+'&text='+textApi+'&lang='+langApi;
//    var vm = this;
//   // $scope.method = 'POST';
//    $scope.url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?';

//    $http({
//        url: url,
//        method:"POST",
//        params:{key:keyAPI,text:textApi,lang:langApi},
//    })

//$http({
//   url: “Url to request”,
//   method: "get/post/put/delete/head",
//   data: “The  data needed to be sent to server”,
//   }).success(function(data, status, headers, config) {
//    “code to run if request succeeds: the response is passed to function”,
//   }).error(function(data, status, headers, config) {
//    “code to run if request fails”
//  });

//POST /api/v1.5/tr/translate?lang=en-ru&key=API-KEY HTTP/1.1
// Host: translate.yandex.net
// Accept: */*
// Content-Length: 17
// Content-Type: application/x-www-form-urlencoded
//
// text=Hello World!


var app = angular.module('angularTrans', []);

app.controller('transCon', function ($scope, $http) {

    $scope.getText = function () {

 //       var myText = document.getElementById("texter").value;
  var myText='I like to watch movies';

 //       var fromTo = document.getElementById("option1").value + "-" + document.getElementById("option2").value;
    fromTo='en-es';

        var url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
        var yKey = "trnsl.1.1.20180918T185434Z.590bfe405a01177e.cf3960cf33309a025b8bda2392413770e4492d6b";
        var callBack='&[callback=successCallBack]';


        var data='?key='+yKey+'&text='+myText+'&lang='+fromTo+callBack;
        $scope.url = "https://translate.yandex.net/api/v1.5/tr.json/translate?";
    myUrl=url+"?key="+yKey+"&text="+myText+"&lang="+fromTo+callBack;

    $http.get(myUrl);//url+"?key="+yKey+"&text"+myText+"&lang"+fromTo+callBack);


//    & [callback=<name of the callback function>]
//        myUrl=ur+'$key='+yKey+'&text='+myText+'&lang='+fromTo;
 //       https://translate.yandex.net/api/v1.5/tr.json/translate?key=
        // trnsl.1.1.20180918T185434Z.590bfe405a01177e.cf3960cf33309a0
        // 25b8bda2392413770e4492d6b&text=Im rich&lang=en-es
//        $http({
//            method: 'POST',
//            url: ur+data,

          //  data: {data},
  //      function successCallBack(response) {
  //      $scope.text = response.text;
 //       $scope.statuscode = response.code;
 //       $scope.statustext = response.lang;
 //       this.data = data;
 //       console.log(data);
    }
});

//}
//});
//THIS ADDRESS WORKS
//'"https://translate.yandex.net/api/v1.5/tr.json/translate
//"'


/*


$http({
    url: “Url to request”,
method: "get/post/put/delete/head",
    data: “The  data needed to be sent to server”,
}).success(function(data, status, headers, config) {
“code to run if request succeeds: the response is passed to function”,
}).error(function(data, status, headers, config) {
“code to run if request fails”
});


*/
    /*
        $scope.getText = function () {

        if (myText != null && myText !== ""){// && searchQuery != null && searchQuery != "") {


            var trans = $http.get( +
                "? key="+key+//<API key>"+//API KEY:
                "& text=" + myText +//<text to translate>"+
                "& lang=" + op1 + "-" + op2  //+<translation direction>"+
            )
            .then(function(response) {
                    $scope.content = response.data;
                    $scope.statuscode = response.status;
                    $scope.statustext = response.statusText;
                });

            trans.success(function (data) {
                if (data != null && data.response != null && data.response.venues != undefined && data.response.venues != null) {
                    // Tie an array named "venueList" to the scope which is an array of objects.
                    // Each object should have key value pairs where the keys are "name", "id" , "location" and values are their corresponding values from the response
                    // Marks will be distributed between logic, implementation and UI
                }
            });
            trans.error(function (data) {
                alert("There was some error processing your request. Please try after some time.");
            });
        }
    }
});

*/