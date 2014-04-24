(function(module) {
  mifosX.controllers = _.extend(module, {
	  ViewBusinessLineController: function(scope, routeParams , location,resourceFactory ) {		
        scope.event = [];
        scope.status = []; 
        
        resourceFactory.businessLineEditResource.get({eventId: routeParams.id} , function(data) {
            scope.event = data;
            scope.status=data.statusData;
           
        });

       /* scope.deleteEvent = function (){
            resourceFactory.eventEditResource.delete({eventId: routeParams.id} , {} , function(data) {
                  location.path('/event');
                  // added dummy request param because Content-Type header gets removed 
                  // if the request does not contain any data (a request body)        
            });
          };*/
    
    }
  });
  mifosX.ng.application.controller('ViewBusinessLineController', ['$scope', '$routeParams', '$location','ResourceFactory', mifosX.controllers.ViewBusinessLineController]).run(function($log) {
    $log.info("ViewBusinessLineController initialized");
  });
}(mifosX.controllers || {}));