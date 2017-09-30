myApp.service('RealtyService', function($http){
    var self = this;
    
    self.getRent = function(){
        $http({
            method: 'GET',
            url: '/getRent'
        }).then(function(res){
            console.log('Service GET success. Res: ', res);
        });
    };  // end getRent funct
});