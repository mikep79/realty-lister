myApp.controller('SaleController', ['RealtyService', function (RealtyService) {
    var vm = this;
    // must pass in obj form
    vm.saleObj = RealtyService.saleObj;

    vm.getSaleData = function () {
        RealtyService.getSale();
        console.log('conroller sale obj: ', vm.saleObj);
    };

    vm.postSaleData = function () {
        // grab input values for new listing
        var newListing = {
            cost: vm.costIn,
            city: vm.cityIn,
            sqft: vm.sqftIn
        };
        // call service func with newListing as param
        RealtyService.postSale(newListing);
    };
}]);