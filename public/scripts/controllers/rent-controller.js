myApp.controller('RentController', ['RealtyService', function (RealtyService){
    var vm = this;
    vm.getRentData = function(){
        RealtyService.getRent();
    };
}]);