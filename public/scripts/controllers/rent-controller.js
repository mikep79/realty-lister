myApp.controller('RentController', ['RealtyService', function (RealtyService){
    var vm = this;
    // must pass in obj form
    vm.rentalObj = RealtyService.rentObj;

    console.log('controller obj 1: ', vm.rentalObj);

    vm.getRentData = function(){
        RealtyService.getRent();
        console.log('controller obj 2: ', vm.rentalObj);    
    };
}]);