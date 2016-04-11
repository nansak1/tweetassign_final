/**
 * Created by nansak1 on 4/3/2016.
 */


app.service('accService', function($http){

    var handle ={};
    var currentUserProfile ={};

   /* var getAllAccounts = function() {
        return $http.get('/accounts');
    };*/

    var setAccount = function(accountHandle){
        handle = accountHandle;
        return handle;
    };

    var followAccount = function(currentUser, poster){
        return $http.put("/accounts/"+ poster +"/follow?follower="+currentUser);
    }

    var accountsFollowing = function(currentUser){
        return $http.get("/accounts/"+ currentUser +"/followers");
    }

    var setUserProfile = function(currentUser){
        $http.get("/accounts/"+ currentUser)
            .then(function(response){
                    currentUserProfile = response.data;
                },
                function(error) {
                    console.log('error', error);

                });
    }


    var getUserProfile = function(){
        //console.log(currentUserProfile);
        return currentUserProfile;
    }

    var getAccount = function() {
        return handle;
    };

    var findAccount = function(user) {
        return $http.get('/accounts/'+ user);
    };

    return {
        findAccount : findAccount,
        setUserProfile: setUserProfile,
        getUserProfile:getUserProfile,
        getAccount:getAccount,
        setAccount: setAccount,
        followAccount:followAccount,
        accountsFollowing:accountsFollowing
        //getAllAccounts : getAllAccounts
    };

});