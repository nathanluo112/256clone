'use strict';

app.directive('sampleDir', function($compile){
  return {
    link: function(scope, element, attrs, controller) {
      var markup = "<input type='text' ng-model='sampleData' /> <div>{{sampleData}}</div>";
      angular.element(element).html($compile(markup)(scope));
    }
  }
});