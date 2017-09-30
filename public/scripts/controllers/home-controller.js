// inject service in array form
myApp.controller('HomeController', ['RealtyService', function(RealtyService){
    var vm = this;
    
    vm.testFunc = function(){
        RealtyService.getRent();
    };

}]);