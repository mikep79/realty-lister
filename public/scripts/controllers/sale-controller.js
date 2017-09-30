myApp.controller('SaleController', ['RealtyService', function (RealtyService) {
    var vm = this;
    // must pass in obj form
    vm.saleObj = RealtyService.saleObj;

    vm.getSaleData = function () {
        RealtyService.getSale();
        console.log('conroller sale obj: ', vm.saleObj);
    };
}]);