/**
 * Created by nansak1 on 4/6/2016.
 */
app.controller('mainController', function($scope, authService, $location){

    var user = authService.getUsername();
    var token = authService.getToken();
    $scope.aToken = token;

    $scope.isLoggedIn = user;
    console.log( "main 1:" + $scope.isLoggedIn);

   /* if (!user && !token){
        $location.path('/login');
        $scope.isLoggedIn = null;
        console.log( "No token:" + $scope.isLoggedIn)
    }
    else{
        $location.path('/home')
        $scope.isLoggedIn = user;
        console.log( "token found:" + $scope.isLoggedIn)
    }*/

    if (!token){
        $location.path('/login');
        $scope.isLoggedIn = null;
        console.log( "No token:" + $scope.isLoggedIn)
    }
    else{
        $location.path('/home')
        $scope.isLoggedIn = user;
        console.log( "token found:" + $scope.isLoggedIn)
    }

    //$scope.isLoggedIn = authService.getUsername();
    //console.log("in main " +  $scope.isLoggedIn);

    $scope.isActive = function (viewLocation) {
        return viewLocation == $location.path();
    }

});

/*app.controller('mainController', ['$scope', 'authService', '$location', function ($scope, authService, $location) {

    $scope.$watch(authService.isLoggedIn, function (value, oldValue) {

        token = authService.getToken
        console.log (token);
        console.log (value);
        //console.log(oldValue);

        //if(!value && oldValue)
        if(!token && !value) {
            console.log("Disconnect");
            $location.path('/');
        }
        else
        //if(value)
        {
            console.log("Connect");
            $scope.loggedInUser = value;
            $location.path('/home');
            //Do something when the user is connected
        }

    }, true);
}]);*/