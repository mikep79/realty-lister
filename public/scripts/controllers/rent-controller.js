myApp.controller('RentController', ['RealtyService', function (RealtyService) {
    var vm = this;
    // must pass in obj form
    vm.rentalObj = RealtyService.rentObj;

    vm.getRentData = function () {
        RealtyService.getRent();
        console.log('controller obj 2: ', vm.rentalObj);
    };

    vm.postRentData = function () {
        // grab input values for new listing
        var newListing = {
            rent: vm.rentIn,
            city: vm.cityIn,
            sqft: vm.sqftIn
        };
        // call service func with newListing as param
        RealtyService.postRent(newListing);
        vm.getRentData();
    };

}]);