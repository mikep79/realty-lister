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
    };

    self.getSale = function(){
        $http({
            method: 'GET',
            url: '/getSale'
        }).then(function(res){
             self.saleObj.sales = res.data;
        });
    };

    self.postRent = function(newListing){
        $http({
            method: 'POST',
            url: '/getRent',
            data: newListing
        }).then(function(res){
            console.log('Service post res: ', res);
        });
    };

    self.postSale = function(newListing){
        $http({
            method: 'POST',
            url: '/getSale',
            data: newListing
        }).then(function(res){
            console.log('Service post res: ', res);
        });
    };
});