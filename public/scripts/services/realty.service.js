myApp.service('RealtyService', function($http){
    var self = this;
    // must pass in obj form
    self.rentObj = {
        rentals: []
    };
    self.getRent = function(){
        $http({
            method: 'GET',
            url: '/getRent'
        }).then(function(res){
            self.rentObj.rentals = res.data;
        });
    };  // end getRent funct
});