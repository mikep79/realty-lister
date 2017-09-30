myApp.service('RealtyService', function($http){
    var self = this;
    // must pass in obj form
    self.rentObj = {
        rentals: []
    };
    self.saleObj = {
        sales: []
    };

    self.getRent = function(){
        $http({
            method: 'GET',
            url: '/getRent'
        }).then(function(res){
            self.rentObj.rentals = res.data;
        });
    };  // end getRent funct

    self.getSale = function(){
        $http({
            method: 'GET',
            url: '/getSale'
        }).then(function(res){
             self.saleObj.sales = res.data;
        });
    };  // end getSale funct
});